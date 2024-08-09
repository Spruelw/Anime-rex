import NavBar from "./NavBar";
import AnimeCard from "./AnimeCard";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";

export default function Search() {
  var location = useLocation();
  //check if data was sent from SearchBar
  if (location.state) {
    var isThereData = location.state.searchResults ? true : false;
  }

  return (
    <div className="search">
      <NavBar />
      <div className="search-hero">
        <div className="search-label">
          <img src="./images/dinosaur.png" alt="dinosaur" />
          <h1>Search</h1>
        </div>
        <SearchBar />
      </div>
      <p className="search-results">Search results</p>
      <div className="search-results-container">
        {isThereData
          ? location.state.searchResults.data.map((item, index) => {
              //put all genre related entries in an array
              var genresAndDemographics = [];

              item.genres.forEach((item) => {
                genresAndDemographics.push(item.name);
              });
              item.themes.forEach((item) => {
                genresAndDemographics.push(item.name);
              });
              item.demographics.forEach((item) => {
                genresAndDemographics.push(item.name);
              });

              return (
                <AnimeCard
                  key={item.mal_id}
                  id={item.mal_id}
                  title={item.title_english ? item.title_english : item.title}
                  imgUrl={item.images.webp.large_image_url}
                  genresAndDemographics={genresAndDemographics}
                  synopsis={item.synopsis ? item.synopsis.slice(0, 220) : null}
                  score={item.score}
                  episodes={item.episodes}
                  year={item.aired.prop.from.year}
                />
              );
            })
          : null}
      </div>
      <a className="svg-background" href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">Free SVG Backgrounds and Patterns by SVGBackgrounds.com</a>
    </div>
  );
}
