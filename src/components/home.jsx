import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  function randomAnime() {
    var randomListOfAnimeIds = [
      205, 6, 889, 400, 20057, 2251, 4087, 2025, 918, 13601, 36563, 40052, 467,
      1412, 24439, 30, 790, 42310, 40256, 202,
    ];
    
    //navigate to recommendations/:random id from reandomListOfAnimeIds
    navigate(
      "/recommendations/" +
        randomListOfAnimeIds[
          Math.floor(Math.random() * randomListOfAnimeIds.length)
        ]
    );
  }

  return (
    <div className="home">
      <NavBar />
      <div className="home-hero">
        <h1>Anime recommendations</h1>
        <p>Based off any anime you search</p>

        <SearchBar />
        <button className="random-recommendation-button" onClick={randomAnime}>
          Random
        </button>
      </div>
      <div className="home-body">
        <div className="home-section-1">
          <div className="phone-and-magnify">
            <img
              className="phone"
              src="/images/phone.png"
              alt="man and a phone"
            />
            <img
              className="magnify"
              src="/images/magnifyingGlass.png"
              alt="magnifying glass"
            />
          </div>
          <p>
            On average, it might take anywhere from a few minutes to several
            hours or even days to decide on a show.
          </p>
        </div>

        <div className="home-section-2">
          <p>Finding your next anime to watch has never been easier.</p>
          <div className="anime-images">
            <img src="/images/skull.png" alt="skull" />
            <img src="/images/sword.png" alt="sword" />
            <img src="/images/pokeball.png" alt="pokeball" />
          </div>
        </div>
      </div>
    </div>
  );
}
