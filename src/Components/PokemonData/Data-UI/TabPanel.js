import React from "react";

const TabPanel = (props) => {
  return (
    <div className="bg-gray-100/10 rounded-lg px-2 py-3 h-28 sm:h-24 sm:h-32">
      <h5 className="text-gray-100/80 text-sm mb-1">Stats</h5>
      <div className="grid grid-cols-2 gap-x-4 px-1">
        {props.panelData.stats.map((poke) => {
          return (
            <div className="grid grid-cols-3">
              <p className="col-span-1 flex items-center capitalize text-gray-100/70 text-xs sm:text-sm">
                {poke.stat.name}:{" "}
              </p>
              <span
                className={`${poke.stat.name} col-span-2 flex items-center justify-center rounded text-xs sm:text-base text-center`}
              >
                {poke.base_stat}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabPanel;
