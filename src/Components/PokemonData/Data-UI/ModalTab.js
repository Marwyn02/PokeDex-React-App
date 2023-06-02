import React from "react";
import RadarChart from "./Chart";
import { Tab } from "@headlessui/react";
import "./ModalTab.css";

const ModalTab = (props) => {
  const tabSelected = `${props.stats.types[0].type.name} opacity-90 py-0.5 sm:py-1 text-white/90 ring-1 ring-white/50 rounded`;
  const tabNotSelected = `py-0.5 sm:py-1 text-white/70 hover:ring-1 hover:ring-gray-100 rounded hover:text-white duration-300`;

  let englishFlavorText = "";
  if (props.species) {
    for (let i = props.species.flavor_text_entries.length - 1; i >= 0; i--) {
      const flavorTextEntry = props.species.flavor_text_entries[i];
      if (flavorTextEntry.language.name === "en") {
        englishFlavorText = flavorTextEntry.flavor_text;
        break;
      }
    }
    englishFlavorText = (
      <p className="font-thin text-white/90 tracking-tight text-sm sm:text-base">
        {englishFlavorText}
      </p>
    );
  }

  return (
    <Tab.Group>
      <Tab.List className="grid grid-cols-3 text-center gap-x-1.5 text-xs px-3 sm:px-5 pt-1 duration-300">
        <Tab
          className={({ selected }) =>
            selected ? `${tabSelected}` : `${tabNotSelected}`
          }
        >
          Base Stats
        </Tab>
        <Tab
          className={({ selected }) =>
            selected ? `${tabSelected}` : `${tabNotSelected}`
          }
        >
          Abilities
        </Tab>
        <Tab
          className={({ selected }) =>
            selected ? `${tabSelected}` : `${tabNotSelected}`
          }
        >
          Weakness
        </Tab>
      </Tab.List>
      <Tab.Panels
        key={props.stats.id}
        className="rounded mt-3 text-sm duration-300"
      >
        <Tab.Panel>
          <div className="OpenTabAnimation -mt-4 -mb-8">
            <RadarChart pokeData={props.stats} />
          </div>
        </Tab.Panel>

        <Tab.Panel>
          <div className="OpenTabAnimation bg-gray-100/10 p-2 pb-4 sm:pb-5 rounded-lg mt-2">
            {props.species && (
              <>
                {props.species.flavor_text_entries.length !== 0 ? (
                  <div className="pr-6 py-2 pl-7 sm:py-4">
                    {englishFlavorText}
                  </div>
                ) : (
                  <div className="pr-6 py-2 pl-7 sm:py-4 font-thin text-white/90 tracking-tight text-sm sm:text-base">
                    This pokemon has no description yet...
                  </div>
                )}
              </>
            )}
            <hr className="border-white/20 mb-2 mt-1 mx-8 sm:mb-4" />
            <h5 className="-mb-1.5 py-1 pl-4 text-sm font-medium text-gray-100/80 capitalize">
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

        <Tab.Panel></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ModalTab;
