import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import '../assets/styles/barchart.css'
const data = [
  { name: "Page A", uv: 4000, pv: 2400 },
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
  { name: "Page D", uv: 2780, pv: 3908 },
  { name: "Page E", uv: 1890, pv: 4800 },
  { name: "Page F", uv: 2390, pv: 3800 },
  { name: "Page G", uv: 3490, pv: 4300 },
];

const data2 = [
  { name: "Page A", uv: 4000, pv: 2400 },
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
  { name: "Page D", uv: 2780, pv: 3908 },
  { name: "Page F", uv: 2390, pv: 3800 },
  { name: "Page G", uv: 3490, pv: 4300 },
];

const data3 = [
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
  { name: "Page D", uv: 2780, pv: 3908 },
  { name: "Page E", uv: 1890, pv: 4800 },
  { name: "Page F", uv: 2390, pv: 3800 },
  { name: "Page G", uv: 3490, pv: 4300 },
];

const BarChartc = () => {
  const [datas, setDatas] = useState(data);

  const changeData = () => setDatas(data);
  const changeData2 = () => setDatas(data2);
  const changeData3 = () => setDatas(data3);

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="ps-title text-2xl mb-4 lg:text-xl xl:text-2xl">Project Statistics</h3>
        <div className="filter-container flex gap-4 mb-4">
          <button
            onClick={changeData}
            className="filter hover:bg-orange-500 hover:text-white rounded-xl p-2"
          >
            24 months
          </button>
          <button
            onClick={changeData2}
            className="filter hover:bg-orange-500 hover:text-white rounded-xl p-2"
          >
            30 days
          </button>
          <button
            onClick={changeData3}
            className="filter hover:bg-orange-500 hover:text-white rounded-xl p-2"
          >
            7 days
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={datas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle" 
            wrapperStyle={{ display: 'flex', justifyContent: 'center', gap: '400px' }}
          />
          <Bar
            dataKey="uv"
            fill="#FF6B6B"
            radius={[10, 10, 0, 0]}
            barSize={20}
            name="User Views" // Custom name for legend
          />
          <Bar
            dataKey="pv"
            fill="#888"
            radius={[10, 10, 0, 0]}
            barSize={20}
            name="Page Views" // Custom name for legend
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartc;
