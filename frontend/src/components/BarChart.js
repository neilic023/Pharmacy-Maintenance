import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import req from '../axios';

const BarChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let priceMed = [];
    let nameMed = [];
    const getData = async () => {
      try {
        const result = await req.get('/products');
        const response = result;
        console.log(response);
        for (const dataObj of response.data) {
          nameMed.push(dataObj.name);
          priceMed.push(dataObj.price);
        }
        setChartData({
          labels: nameMed,
          datasets: [
            {
              label: 'Price of medicine in EUR',
              data: priceMed,
              backgroundColor: ['rgba(72, 192, 192, 0.6)'],
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
      console.log(priceMed, nameMed);
    };
    getData();
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="col-span-3">
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
