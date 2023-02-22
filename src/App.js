import React, { useEffect, useState } from "react";
import PokeList from "./Components/PokemonData/PokeList";
import PokeModal from "./Components/PokemonData/PokeModal";
import PokePageButton from "./Components/PokemonNavigation/PokePageButton";
import SearchHomePage from "./Components/PokemonSearchData/SearchHomePage";
import UtilsBar from "./Components/Nav/UtilsBar";
import Navbar from "./Components/Nav/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./Components/Footer/Footer";
import LoadingSpinner from "./Components/UI/LoadingSpinner";
import axios from "axios";
import "tw-elements";

const App = () => {
  const [Pokedata, setPokedata] = useState([]);
  const [Pokedex, setPokedex] = useState();
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [isLoading, setIsLoading] = useState(true);
  const [nextURL, setNextURL] = useState();
  const [prevURL, setPrevURL] = useState();
  const [searchPanel, setSearchPanel] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    const pokemonFun = async () => {
      setIsLoading(true);
      const res = await axios.get(URL);
      // console.log(res);
      // if (!res.ok) {
      //   throw new Error("Something went wrong");
      // }
      setNextURL(res.data.next);
      setPrevURL(res.data.previous);
      getPokemon(res.data.results);
      setIsLoading(false);
    };
    pokemonFun();
  }, [URL]);

  const getPokemon = (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      // console.log(result.data);
      setPokedata((prevPokemon) => {
        prevPokemon = [...prevPokemon, result.data];
        prevPokemon.sort((a, b) => (a.id > b.id ? 1 : -1));
        return prevPokemon;
      });
    });
  };

  let PokemonContent = (
    <p className="text-center">No pokemons for a moment...</p>
  );
  if (Pokedata.length > 0) {
    PokemonContent = (
      <div>
        <PokeList data={Pokedata} info={(pokemon) => setPokedex(pokemon)} />
        {Pokedex && <PokeModal info={Pokedex} />}
      </div>
    );
  }
  // if (error) {
  //   PokemonContent = <p>{error}</p>;
  // }
  if (isLoading) {
    PokemonContent = <LoadingSpinner />;
  }

  const SearchPanelHandler = () => {
    console.log("Panel Clicked");
    setSearchPanel(true);
  };
  const HomePageHandler = () => {
    setSearchPanel(false);
  };

  return (
    <React.Fragment>
      <LandingPage />
      <Navbar click={SearchPanelHandler} homeClick={HomePageHandler} />
      <UtilsBar click={SearchPanelHandler} homeClick={HomePageHandler} />
      {searchPanel && <SearchHomePage />}
      {!searchPanel && (
        <div className="mx-3 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-96 2xl:px-20">
          {
            <div>
              <PokePageButton
                setData={setPokedata}
                prev={prevURL}
                next={nextURL}
                switch={setURL}
              />
              {PokemonContent}
              <PokePageButton
                setData={setPokedata}
                prev={prevURL}
                next={nextURL}
                switch={setURL}
              />
            </div>
          }
        </div>
      )}
      <Footer />
    </React.Fragment>
  );
};

export default App;
