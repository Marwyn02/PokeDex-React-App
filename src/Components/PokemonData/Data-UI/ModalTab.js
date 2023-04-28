import React from "react";
import { Tab } from "@headlessui/react";

const ModalTab = (props) => {
  return (
    <Tab.Group key={props.stats.id}>
      <Tab.List className="grid grid-cols-3 text-center gap-x-1.5 text-xs px-1.5 pt-1 duration-300">
        <Tab
          className={({ selected }) =>
            selected
              ? `${props.stats.types[0].type.name} opacity-90 py-1 text-white/90 ring-1 ring-white/50 rounded`
              : "py-1 text-white/70 hover:ring-1 hover:ring-gray-100 rounded hover:text-white duration-300"
          }
        >
          Stats
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? `${props.stats.types[0].type.name} opacity-90 text-white/90 ring-1 ring-white/50 rounded`
              : "text-white/70 hover:ring-1 hover:ring-gray-100 rounded hover:text-white duration-300"
          }
        >
          Abilities
        </Tab>
        {/* <Tab
          className={({ selected }) =>
            selected
              ? `${props.stats.types[0].type.name} opacity-90 text-white/90 ring-1 ring-white/50 rounded`
              : "text-white/70 hover:ring-1 hover:ring-gray-100 rounded hover:text-white duration-300"
          }
          disabled
        >
          Tab 3
        </Tab> */}
      </Tab.List>
      <Tab.Panels className="rounded mt-3 text-sm duration-300">
        <Tab.Panel>
          <div className="bg-gray-100/10 rounded-lg px-2 py-3 h-24 sm:h-32">
            <h5 className="text-gray-100/80 text-sm mb-1">Stats</h5>
            <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 px-1">
              {props.stats.stats.map((poke) => {
                return (
                  <div className="grid grid-cols-3">
                    <p className="col-span-2 flex items-center capitalize text-gray-100/70 text-xs sm:text-sm">
                      {poke.stat.name}:{" "}
                    </p>
                    <span
                      className={`${poke.stat.name} col-span-1 flex items-center justify-center rounded text-xs sm:text-base text-center`}
                    >
                      {poke.base_stat}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="bg-gray-100/10 p-2 rounded-lg mt-2 h-24 sm:h-32">
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
