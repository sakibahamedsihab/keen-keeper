import { useContext } from "react";
import { TimelineContext } from "../Context/TimelineContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Stats() {
  const { interactions } = useContext(TimelineContext);

  const callCount = interactions.filter((item) => item.type === "Call").length;
  const textCount = interactions.filter((item) => item.type === "Text").length;
  const videoCount = interactions.filter(
    (item) => item.type === "Video",
  ).length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ];

  const chartData = data.filter((item) => item.value > 0);

  const COLORS = ["#244D3F", "#7E35E1", "#37A163"];

  return (
    <main className="max-w-285 w-full mx-auto px-4 py-6 sm:py-10 flex flex-col grow">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10 text-[#1F2937]">
        Friendship Analytics
      </h1>

      <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-8 shadow-sm h-[300px] sm:h-[400px] lg:h-[500px] flex flex-col items-center justify-center">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={140}
                paddingAngle={2}
                cornerRadius={10}
                dataKey="value"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                wrapperStyle={{ paddingTop: 20 }}
                height={36}
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-gray-400 text-lg">
            No interaction data available to show analytics.
          </div>
        )}
      </div>
    </main>
  );
}
