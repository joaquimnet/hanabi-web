import connect from '../../../middleware/mongodb';

import Settings from '../../../models/settings';

async function handler(req, res) {
  const settings = await Settings.findById(req.query.id);
  if (!settings) {
    return res.status(404).send({ error: 'not_found' });
  }
  res.send(settings.toObject());
}

export default connect(handler);
