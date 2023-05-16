import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = (props) => {
  const [baseStat, setBaseStat] = useState([]);
  ChartJS.defaults.color = "#333";

  const data = {
    labels: ["Health", "Attack", "Defense", "Spe-Att", "Spe-Def", "Speed"],
    datasets: [
      {
        label: "Stats",
        data: baseStat,
        color: "#FFFFFF80",
        backgroundColor: "#DBDFEA99",
        borderColor: "#555F5Ecc",
        pointBorderWidth: 0.3,
        borderWidth: 1,
        pointStyle: false,
        options: {
          // responsive: true,
          // aspectRatio: 1,
          // devicePixelRatio: window.devicePixelRatio || 1,
          maintainAspectRatio: false,
        },
      },
    ],
  };
  const options = {
    plugins: {
      colors: {
        forceOverride: true,
      },
      legend: {
        display: false,
      },
    },

    scales: {
      r: {
        animate: true,
        beginAtZero: true,
        suggestedMin: 20,
        suggestedMax: 100,
        angleLines: {
          color: "#FFFFFF66",
        },
        ticks: {
          backdropColor: "#ffffff00",
          color: "white",
          stepSize: 25,
          font: {
            size: 8,
          },
          display: true,
        },
        pointLabels: {
          backdropPadding: {
            x: 1.5,
            y: 1.5,
          },
          borderRadius: 4,
          backdropColor: [
            "#29b22d",
            "#f4423a",
            "#2297f4",
            "#3e3099",
            "#2072aa",
            "#afe6f6",
          ],
          color: ["#FFF", "#EEE", "#EEE", "#EEE", "#EEE", "#444"],
          font: {
            size: 11,
            weight: "normal",
          },
        },

        grid: {
          color: "#FFFFFF33",
        },
      },
    },
  };

  useEffect(() => {
    const BaseStats = props.pokeData.stats.map((Data) => {
      return Data.base_stat;
    });

    setBaseStat(BaseStats);
  }, [props.pokeData.stats]);

  return (
    <div className="mx-auto pt-6 px-10 pb-0 sm:pt-10 sm:px-8 md:pt-20 md:px-16 md:pb-0 -mt-3 md:-mt-16">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
