import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    navy: 12,
    blue: 18,
    green:22,
    yellow:25,
    red:28,
    amt: 60,
  },
  {
    name: "Feb",
    navy: 18,
    blue: 22,
    green:27,
    yellow:30,
    red:32,
    amt: 60,
  },
  {
    name: "Mar",
    navy: 22,
    blue: 30,
    green:32,
    yellow:35,
    red:40,
    amt: 60
  },
  {
    name: "Apr",
    navy: 20,
    blue: 24,
    green:30,
    yellow:32,
    red:34,
    amt: 60
  },
  {
    name: "May",
    navy: 35,
    blue: 44,
    green:48,
    yellow:50,
    red:53,
    amt: 60
  },
  {
    name: "Jun",
    navy: 30,
    blue: 35,
    green:40,
    yellow:42,
    red:44,
    amt: 60
  },
  {
    name: "Jul",
    navy: 24,
    blue: 30,
    green:33,
    yellow:35,
    red:40,
    amt: 60
  },
  {
    name: "Aug",
    navy: 18,
    blue: 24,
    green:28,
    yellow:30,
    red:32,
    amt: 60
  },
  {
    name: "Sep",
    navy: 32,
    blue: 38,
    green:42,
    yellow:44,
    red:46,
    amt: 60
  }, {
    name: "Oct",
    navy: 12,
    blue: 18,
    green:22,
    yellow:25,
    red:28,
    amt: 60
  },
  {
    name: "Nov",
    navy: 22,
    blue: 26,
    green:30,
    yellow:32,
    red:34,
    amt: 60
  },
  {
    name: "Dec",
   navy: 25,
    blue:30,
    green:33,
    yellow:38,
    red:40,
    amt: 60
  }
];

export default function Progressbar() {
  return (
    <>
    <div className="head-bg">
        <p className="head-name">Progress Tracker</p>

    </div>
    <BarChart
      width={800}
      height={280}
      data={data}
      margin={{
        top:10,
        right: 10,
        left:1,
        bottom: 1
      }}
    >
      <CartesianGrid strokeDasharray="1 1"  color="grey"/>
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis  domain={[10, 60]} axisLine={false} tickLine={false}/>
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="navy" stackId="a" barSize={8}  fill="#2b2c7d" />
      <Bar dataKey="blue" stackId="a" barSize={8} fill="#1975d9" />
      <Bar dataKey="green" stackId="a"barSize={8} fill="#3be2cb" />
      <Bar dataKey="yellow" stackId="a" barSize={8} fill="#f7d600" />
      <Bar dataKey="red" stackId="a" barSize={8} fill="#e84d1c" />
    </BarChart>
    </>
  );
}
