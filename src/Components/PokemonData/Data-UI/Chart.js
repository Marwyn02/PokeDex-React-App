import { React } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Chart = (props) => {
  const data = [
    {
      subject: `Health (${props.pokeData.stats[0].base_stat})`,
      A: props.pokeData.stats[0].base_stat,
    },
    {
      subject: `Attack (${props.pokeData.stats[1].base_stat})`,
      A: props.pokeData.stats[1].base_stat,
    },
    {
      subject: `Defense (${props.pokeData.stats[2].base_stat})`,
      A: props.pokeData.stats[2].base_stat,
    },
    {
      subject: `Spe-Att (${props.pokeData.stats[3].base_stat})`,
      A: props.pokeData.stats[3].base_stat,
    },
    {
      subject: `(${props.pokeData.stats[4].base_stat}) Spe-Def`,
      A: props.pokeData.stats[4].base_stat,
    },
    {
      subject: `(${props.pokeData.stats[5].base_stat}) Speed`,
      A: props.pokeData.stats[5].base_stat,
    },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <RadarChart outerRadius={88} data={data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="subject"
            tick={{
              fill: "white",
              fontSize: 11,
              fontWeight: "lighter",
              enableBackground: "red",
            }}
            axisLine="true"
          />
          <PolarRadiusAxis angle={60} domain={[0, 100]} />
          <Radar
            name="Pokemon Stats"
            dataKey="A"
            stroke="#555F5Ecc"
            fill="#DBDFEA99"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
