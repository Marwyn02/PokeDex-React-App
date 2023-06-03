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
    <>
      <div style={{ width: "100%", height: 300, position: "relative" }}>
        <div className="text-white/40 lowercase font-bold text-sm -mb-14 pt-8 px-10">
          Statistics:
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart outerRadius={90} data={data}>
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
              stroke="#555F5Eff"
              fill="#DBDFEAcc"
              fillOpacity={1}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
