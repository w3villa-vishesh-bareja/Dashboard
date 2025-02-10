import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { RxDotsVertical } from "react-icons/rx";

Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['App Design', 'Development', 'Testing'],
  datasets: [
    {
      label: 'App Design',
      data: [65, 35],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(0, 0, 0, 0.1)'
      ],
      borderWidth: 5,
      hoverOffset: 10,
      borderRadius: 20,
        },
    {
      label: 'Development',
      data: [80, 20],
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)',
        'rgba(0, 0, 0, 0.1)'
      ],
      borderWidth: 5,
      hoverOffset: 10,
      borderRadius: 20,
        },
    {
      label: 'Testing',
      data: [85, 15],
      backgroundColor: [
        'rgba(255, 206, 86, 0.8)',
        'rgba(0, 0, 0, 0.1)'
      ],
      borderWidth: 5,
      hoverOffset: 10,
      borderRadius: 20,
    }
  ]
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 20,
        font: {
          size: 14
        },
        padding: 20
      }
    }
  },
  elements: {
    arc: {
      borderRadius: 20
    }
  }
};

const BarChartc = () => {
  return (
<div className="flex flex-col gap-8 items-center w-full h-full">
      <div className="flex justify-between w-full">
        <h3 className="font-bold text-lg">Project Overview</h3>
        <RxDotsVertical className="hover:bg-gray-200 cursor-pointer rounded-full p-2 mt-1 text-4xl" />
      </div>
      <div className="w-full grid place-items-center h-80 sm:h-96 relative">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChartc;
