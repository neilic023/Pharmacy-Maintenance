import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import req from '../axios';
const PieChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    const getData = async () => {
      let data = {};
      let manufacturer = [];
      let noOfProducts = [];
      try {
        const result = await req.get('/products');
        const response = result;
        console.log(response);

        //dodeljivanje key value para
        response.data.forEach(el => {
          data[el.manufacturer] = (data[el.manufacturer] || 0) + 1;
        });

        manufacturer = Object.keys(data);
        console.log(manufacturer);

        noOfProducts = Object.values(data);
        console.log(noOfProducts);

        setChartData({
          labels: manufacturer,
          datasets: [
            {
              label: 'TESTTESTTEST',
              data: noOfProducts,
              backgroundColor: [
                'rgba(166,221,255, 0.2)',
                'rgba(54,162,235, 0.2)',
                'rgba(168,123,59,0.2)',
                'rgba(92,162,231, 0.2)',
                'rgba(76, 133, 168, 0.2)',
                'rgba(245,192,118,0.2)',
                'rgba(50,168,115,0.2)',
                'rgba(97,245,178,0.2)',
              ],
            },
          ],
          options: {
            maintainAspectRatio: false,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="col-span-2">
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
