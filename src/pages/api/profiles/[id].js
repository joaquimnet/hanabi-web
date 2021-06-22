import connect from '../../../middleware/mongodb';

import Profile from '../../../models/profile';

async function handler(req, res) {
  const profile = await Profile.findById(req.query.id);
  if (!profile) {
    return res.status(404).send({ error: 'not_found' });
  }
  res.send(profile.toObject());
}

export default connect(handler);
