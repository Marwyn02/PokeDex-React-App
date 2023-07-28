import React, { useEffect, useState } from "react";
import PokeList from "./Components/PokemonData/PokeList";
import PokeModal from "./Components/PokemonData/PokeModal";
import PokePageButton from "./Components/PokemonNavigation/PokePageButton";
import SearchHomePage from "./Components/PokemonSearchData/SearchHomePage";
import MapHomePage from "./Components/PokemonMapSearch/MapHomePage";
import Navbar from "./Components/Nav/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./Components/Footer/Footer";
import LoadingSpinner from "./Components/UI/LoadingSpinner";
import axios from "axios";
import ErrorInput from "./Components/UI/ErrorInput";
import RGBBorder from "./Components/UI/RGBBorder";
import "tw-elements";
import "./App.css";

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
  const [onModal, setOnModal] = useState(false);
  const [countingLoading, setCountingLoading] = useState(false); // <-- this must be false

  useEffect(() => {
    const pokemonFun = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(URL);
        setNextURL(res.data.next);
        setPrevURL(res.data.previous);
        getPokemon(res.data.results);
        setIsLoading(false);
      } catch (error) {
        setError(true);
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

  const modalEnabler = () => {
    setOnModal(true);
  };
  const modalDisabler = () => {
    setOnModal(false);
  };
  const countingLoadingHandler = () => {
    setCountingLoading(true);
  };

  let PokemonContent = <p> </p>;
  if (Pokedata.length > 0) {
    PokemonContent = (
      <div>
        <PokeList
          data={Pokedata}
          onModalEnabler={modalEnabler}
          processedTransferData={(pokemon) => setPokedex(pokemon)}
        />
        {Pokedex && (
          <PokeModal
            info={Pokedex}
            enabler={onModal}
            disabler={modalDisabler}
          />
        )}
      </div>
    );
  }
  if (error) {
    PokemonContent = (
      <ErrorInput
        errorTitle={"There's something wrong with the server."}
        errorMsg={"Please try it again next time."}
      />
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
      <LandingPage
        countingLoad={countingLoadingHandler}
        percLoading={isLoading}
      />
      {/* Comment this when developing ^^ */}
      {countingLoading && (
        <>
          <RGBBorder />
          <Navbar
            searchClick={SearchPanelHandler}
            homeClick={HomePageHandler}
            mapClick={MapSearchHandler}
          />
          {mapSearch && <MapHomePage />}
          {searchPanel && <SearchHomePage />}
          {!searchPanel && !mapSearch && (
            <div className="mx-3 md:mx-20 md:my-16 lg:mx-32 xl:mx-40 2xl:mx-48 2xl:px-20">
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
        </>
      )}
    </React.Fragment>
  );
};

export default App;
