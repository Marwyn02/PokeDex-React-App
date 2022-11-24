import React, { useEffect, useState } from "react";
import PokeInfo from "./Components/PokemonData/PokeInfo";
import PokeList from "./Components/PokemonData/PokeList";
import PokePageButton from "./Components/PokemonNavigation/PokePageButton";
import Navbar from "./Components/Nav/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./Components/Footer/Footer";
import LoadingSpinner from "./Components/UI/LoadingSpinner";
import axios from "axios";

const App = () => {
  const [Pokedata, setPokedata] = useState([]);
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [isLoading, setIsLoading] = useState(true)
  const [nextURL, setNextURL] = useState();
  const [prevURL, setPrevURL] = useState();
  const [Pokedex, setPokedex] = useState();

  useEffect(() => {
    const pokemonFun = async () => {
      setIsLoading(true);
      const res = await axios.get(URL);
      setNextURL(res.data.next);
      setPrevURL(res.data.previous);
      getPokemon(res.data.results);
      setIsLoading(false);
    };
    pokemonFun();
  }, [URL])
  
  const getPokemon = (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      // console.log(result.data)
      setPokedata((prevPokemon) => {
        prevPokemon = [...prevPokemon, result.data];
        prevPokemon.sort((a, b) => (a.id > b.id ? 1 : -1));
        return prevPokemon;
      });
    });
  };

  return (
    <div>
      {!<Navbar />}
      <LandingPage />
      <div className="mx-3 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-96 2xl:px-20">
      {!<PokeInfo info={Pokedex} />}
        { 
          <div>
            <PokePageButton
              setData={setPokedata}
              prev={prevURL}
              next={nextURL}
              switch={setURL}
            />
            { 
              isLoading ? <LoadingSpinner /> :
              <PokeList data={Pokedata} info={(poke) => setPokedex(poke)} />
            }
            <PokePageButton
              setData={setPokedata}
              prev={prevURL}
              next={nextURL}
              switch={setURL}
            />
          </div>
        }
      </div>
      <Footer />
    </div>
  );
};

export default App;
