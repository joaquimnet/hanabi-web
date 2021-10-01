import React from 'react';
import { useEffect, useState } from 'react';
import {
  Chart,
  LineController,
  BarController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  BarElement,
  Tooltip,
} from 'chart.js';

Chart.register(
  LineController,
  BarController,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
);

export const ServerCountChart = () => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) return;
    const ctx = document.getElementById('chart');
    try {
      const serverCountChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'May 2021',
            'June 2021',
            'July 2021',
            'August 2021',
            'September 2021',
          ],
          datasets: [
            {
              label: '# of Servers',
              data: [1, 4, 25, 52, 78],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Hanabi Server Counts',
              padding: {
                top: 10,
                bottom: 30,
              },
            },
            tooltip: {
              enabled: true,
              axis: 'y',
            },
          },
        },
      });
      setChart(serverCountChart);
    } catch {
      console.log('Chart!');
    }
  }, [chart]);
  return <canvas id="chart"></canvas>;
};
