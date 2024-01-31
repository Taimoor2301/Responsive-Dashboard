import { useEffect, useRef, useState } from "react";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
export default function Chart() {
  const [dimenstion, setDimention] = useState({ width: 405, height: 300 });
  const data = [
    {
      name: "Week 1",
      Jogging: 5,
      Bicycle: 15,
      amt: 100,
      y: 100,
    },
    {
      name: "Week 2",
      Jogging: 50,
      Bicycle: 4,
      amt: 100,
      y: 100,
    },
    {
      name: "Week 3",
      Jogging: 30,
      Bicycle: 20,
      amt: 100,
      y: 100,
    },
    {
      name: "Week 4",
      Jogging: 5,
      Bicycle: 45,
      amt: 100,
      y: 100,
    },
    {
      name: "Week 5",
      Jogging: 60,
      Bicycle: 10,
      amt: 100,
      y: 100,
    },
    {
      name: "Week 6",
      Jogging: 5,
      Bicycle: 70,
      amt: 100,
      y: 100,
    },
    {
      name: "Week 7",
      Jogging: 5,
      Bicycle: 10,
      amt: 100,
      y: 100,
    },
  ];

  const container = useRef(null);

  useEffect(() => {
    function setDimentions() {
      const rect = container.current?.getBoundingClientRect();
      if (rect) {
        setDimention({ width: rect.width, height: rect.height });
      }
    }
    setDimentions();
    window.addEventListener("resize", setDimentions);
    return () => window.removeEventListener("resize", setDimentions);
  }, []);

  return (
    <div
      className="col-span-6 xl:col-span-4 w-full overflow-hidden"
      ref={container}
    >
      <AreaChart
        width={dimenstion.width}
        height={dimenstion.height}
        data={data}
        className="w-full bg-i/10 rounded-xl border border-p py-1"
        margin={{ top: 10, bottom: 0, right: 5, left: -20 }}
      >
        <defs>
          <linearGradient id="colorJogging" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorBicycle" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="rgb(230,97,140)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="rgb(230,97,140)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis dataKey="y" />
        <CartesianGrid strokeDasharray="7 7" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Jogging"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorJogging)"
        />
        <Area
          type="monotone"
          dataKey="Bicycle"
          stroke="rgb(230,97,140)"
          fillOpacity={1}
          fill="url(#colorBicycle)"
        />
      </AreaChart>
    </div>
  );
}
