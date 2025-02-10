import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import '../assets/styles/donutchart.css'
const data = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
];

const COLORS = ["#FF9F43", "#FF6B6B", "#4D96FF"];

const Donutchart = () => {
  return (
    <>
      <div className="flex justify-start w-full">
        <h3 className="title mb-2 text-2xl sm:text-xl" >Monthly Target</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            innerRadius="50%"
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="flex justify-center mt-2 gap-6">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 s">
            <div
              className="w-10 h-4 rounded-sm sm:w-8"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className="text-gray-600">{entry.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Donutchart;
