import './pokelist.css';

const PokeList = (props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-1 sm:gap-1.5 md:gap-2 lg:gap-3.5 mb-3 md:mt-10 duration-300">
      {props.data.map((item) => {
        return (
          <div key={item.id} className='group duration-300 ease-in' onClick={() => props.info(item)}>
            <div className="mx-w-sm border border-black group-hover:border-gray-100 capitalize relative">
              <span className="font-light text-md md:text-2xl ml-2 absolute group-hover:font-bold duration-300">
                {item.id}
              </span>
              <img
                className="mx-auto group-hover:-translate-y-6 group-hover:scale-150 group-hover:delay-150 duration-300"
                src={item.sprites.front_default}
                alt=""
              />
              <div className="px-2 md:px-5 py-3 mt-6 bg-black/75 group-hover:bg-black/90 duration-300">
                <h1 className="tracking-wide font-semibold text-xl text-white/80 group-hover:text-white duration-300">{item.name}</h1>
                <div className="grid grid-cols-3 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pt-4 pb-1 text-sm">
                <p>Type</p>
                  {item.types.map((poke) => {
                    return <p className={`${poke.type.name} rounded-md text-center text-xs py-0.5`}>{poke.type.name}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokeList;
