import React from "react";
import RadarChart from "./Chart";
import { Tab } from "@headlessui/react";

const ModalTab = (props) => {
  const tabSelected = `${props.stats.types[0].type.name} opacity-90 py-0.5 sm:py-1 text-white/90 ring-1 ring-white/50 rounded`;
  const tabNotSelected = `py-0.5 sm:py-1 text-white/70 hover:ring-1 hover:ring-gray-100 rounded hover:text-white duration-300`;

  return (
    <Tab.Group>
      <Tab.List className="grid grid-cols-3 text-center gap-x-1.5 text-xs px-3 sm:px-5 pt-1 duration-300">
        <Tab
          className={({ selected }) =>
            selected ? `${tabSelected}` : `${tabNotSelected}`
          }
        >
          Stats
        </Tab>
        <Tab
          className={({ selected }) =>
            selected ? `${tabSelected}` : `${tabNotSelected}`
          }
        >
          Abilities
        </Tab>
        {/* <Tab
          className={({ selected }) =>
            selected
              ? `${tabSelected}` : `${tabNotSelected}`
          }
          disabled
        >
          Tab 3
        </Tab> */}
      </Tab.List>
      <Tab.Panels
        key={props.stats.id}
        className="rounded mt-3 text-sm duration-300"
      >
        <Tab.Panel>
          <RadarChart pokeData={props.stats} />
        </Tab.Panel>
        <Tab.Panel>
          {/* <TabPanel /> */}
          <div className="bg-gray-100/10 p-2 rounded-lg mt-2 h-28 sm:h-32">
            <h5 className="-mb-1.5 py-1 text-sm font-medium text-gray-100/80 capitalize">
              Abilities
            </h5>
            <div className="grid grid-cols-2 gap-1.5 md:gap-2 px-10 py-2">
              {props.stats.abilities.map((poke) => {
                return (
                  <p className="abilities-bg flex justify-center items-center capitalize text-xs opacity-90 sm:text-sm text-black/70 rounded">
                    {poke.ability.name}
                  </p>
                );
              })}
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="h-24 sm:h-32">{props.species.name}</div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ModalTab;
