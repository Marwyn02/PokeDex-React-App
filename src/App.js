import React, { useEffect, useState } from "react";
import PokeList from "./Components/PokemonData/PokeList";
import PokeModal from "./Components/PokemonData/PokeModal";
import PokePageButton from "./Components/PokemonNavigation/PokePageButton";
import SearchHomePage from "./Components/PokemonSearchData/SearchHomePage";
import MapHomePage from "./Components/PokemonMapSearch/MapHomePage";
import NavbarDesktop from "./Components/Nav/NavbarDesktop";
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
  const [mapSearch, setMapSearch] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const pokemonFun = async () => {
      try {
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
      } catch (error) {
        setError(true);
        // console.log("You got an error", error);
        setIsLoading(false);
      }
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

  let PokemonContent = <p> </p>;
  if (Pokedata.length > 0) {
    PokemonContent = (
      <div>
        <PokeList data={Pokedata} info={(pokemon) => setPokedex(pokemon)} />
        {Pokedex && <PokeModal info={Pokedex} />}
      </div>
    );
  }
  if (error) {
    PokemonContent = (
      <div className="text-center mx-5 md:mx-32 lg:mx-60 py-5 mb-20 border-y-4 border-red-400/50">
        <p className="text-sm">There's something wrong with the server.</p>
        <p className="text-lg font-bold tracking-wide">
          Please try it again next time.
        </p>
      </div>
    );
  }
  if (isLoading) {
    PokemonContent = <LoadingSpinner />;
  }

  const SearchPanelHandler = () => {
    setSearchPanel(true);
    setMapSearch(false);
  };
  const HomePageHandler = () => {
    setSearchPanel(false);
    setMapSearch(false);
  };
  const MapSearchHandler = () => {
    setMapSearch(true);
    setSearchPanel(false);
  };

  return (
    <React.Fragment>
      <LandingPage />
      <Navbar
        click={SearchPanelHandler}
        homeClick={HomePageHandler}
        mapClick={MapSearchHandler}
      />
      <NavbarDesktop
        searchClick={SearchPanelHandler}
        homeClick={HomePageHandler}
        mapClick={MapSearchHandler}
      />
      {mapSearch && <MapHomePage />}
      {searchPanel && <SearchHomePage />}
      {!searchPanel && !mapSearch && (
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
