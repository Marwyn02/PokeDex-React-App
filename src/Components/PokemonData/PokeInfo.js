import './Info.css';

const PokeInfo = (props) => {
  return (
    <div>
      {!props.info ? (
        ""
      ) : (
        <div className="p-2 mb-1 mt-2 rounded-lg bg-yellow-300 md:bg-gray-200 drop-shadow-md cursor-default">
          <div className="grid md:grid-cols-2 md:gap-0 rounded-lg capitalize bg-white">
            <div className="md:grid md:grid-cols-1 md:px-10 md:mt-5">
              <div className="pt-8 px-5">
                <h1 className="text-2xl md:text-4xl font-bold -mt-5 tracking-wide gradient-text">
                  {props.info.name}
                </h1>
                <span className="font-light text-gray-500">{ props.info.id }</span>
              </div>
              <div className="pb-8 px-5">
                <img
                  className="mx-auto"
                  src={props.info.sprites.other.dream_world.front_default}
                  alt=""
                />
              </div>
            </div>
            <div className="border-l -mt-5 md:mt-0 rounded-t-lg md:rounded-none md:p-20 md:mt-8 md:mb-8">
              <div className="grid grid-flow-col auto-cols-max gap-2 pb-3 mt-5 flex justify-center">
                {props.info.types.map((poke) => {
                  return (
                    <p
                      className="border-2 mx-auto px-4 border-gray-600 text-white
                                    rounded-full text-center w-100 hover:border-transparent hover:bg-transparent
                                    hover:text-gray-700 bg-gray-600 font-bold tracking-wider
                                    duration-300"
                    >
                      {poke.type.name}
                    </p>
                  );
                })}
              </div>
              <div className="text-center mx-8 my-1 md:mb-3 py-1 font-light md:text-lg">
                {props.info.stats.map((poke) => {
                  return (
                    <p>
                      {poke.stat.name}: {poke.base_stat}
                    </p>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 gap-1 text-center md:mb-2 md:text-lg md:font-semibold">
                {props.info.abilities.slice(0, 2).map((poke) => {
                  return <p>{poke.ability.name}</p>;
                })}
              </div>
              <hr className="border-black mx-8 mb-3 md:mb-5" />
              <div className="grid grid-cols-2 px-2 gap-1 md:gap-2 mb-2">
                {props.info.moves.slice(0, 4).map((poke) => {
                  return (
                    <p
                      className="border-2 border-gray-600 bg-gray-600 text-white 
                          rounded-lg text-center w-100 font-semibold
                          hover:border-transparent hover:bg-transparent
                          duration-200 hover:text-gray-700"
                    >
                      {poke.move.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokeInfo;
