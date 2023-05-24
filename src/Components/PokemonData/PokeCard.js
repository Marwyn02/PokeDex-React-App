import React from "react";

const PokeCard = (props) => {
  const { transferData, modalEnabler } = props;

  return (
    <div
      key={props.data.id}
      className="group duration-300 ease-in"
      onClick={() => {
        transferData(props.data);
        modalEnabler();
      }}
    >
      <div className="mx-w-sm border border-black group-hover:border-gray-100 capitalize relative">
        <span className="font-light text-md md:text-2xl ml-2 absolute group-hover:font-bold group-hover:z-10 group-hover:text-2xl group-hover:ml-0 duration-300 pointer-events-none">
          {props.data.id}
        </span>
        <img
          className="mx-auto p-3 max-h-32 md:max-h-52 max-w-full group-hover:-translate-y-6 group-hover:scale-125 
                      group-hover:md:scale-150 group-hover:z-10 group-hover:delay-150 duration-300 pointer-events-none"
          src={props.data.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <div className="px-2 md:px-5 py-3 mt-1 bg-black/75 group-hover:bg-black/90 duration-300">
          <h1
            key={props.data.id}
            className="font-semibold text-xl text-white/80 group-hover:text-white duration-300 pointer-events-none"
          >
            {props.data.name}
          </h1>
          <div className="grid grid-cols-3 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pt-4 pb-1 text-sm pointer-events-none">
            <p>Type</p>
            {props.data.types.map((poke) => {
              return (
                <p
                  className={`${poke.type.name} rounded-md text-center text-xs py-0.5`}
                >
                  {poke.type.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
