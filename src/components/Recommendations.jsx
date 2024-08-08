import NavBar from "./NavBar";
import AnimeCard from "./AnimeCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Recommendations() {
  const [recommendationTitle, setRecommendationTitle] = useState("");
  const [recommendationImgUrl, setRecommendationImgUrl] = useState("");
  const [recommendationList, setRecommendationList] = useState([]);
  let { id } = useParams();

  //get anime and recommendations from id param
  useEffect(() => {
    if (id) {
      getSelectedAnime(id);
      getRecommendations(id);
    }
  }, [id]);

  async function getSelectedAnime(id) {
    var result = await axios.get("https://api.jikan.moe/v4/anime/" + id);
    setRecommendationImgUrl(result.data.data.images.webp.large_image_url);

    //see if there is an english title property, if not use title property value
    setRecommendationTitle(
      result.data.data.title_english
        ? result.data.data.title_english
        : result.data.data.title
    );
  }

  //get results for recommendations-container
  async function getRecommendations(id) {
    var result = await axios.get(
      "https://api.jikan.moe/v4/anime/" + id + "/recommendations"
    );
    setRecommendationList(result.data.data.slice(0, 10));
  }

  return (
    <div className="recommendations-container">
      <NavBar />
     { //if id param exists, render data. Otherwise leave black
      id ? (
        <>
          <div className="selectedForRecommending">
            <h2>Recommendations </h2>
            <p>{recommendationTitle}</p>

            <img src={recommendationImgUrl} alt="anime"></img>
          </div>

          <div className="recommendations-results-container">
            {recommendationList.map((item, index) => {
              return (
                <AnimeCard
                  key={index}
                  title={item.entry.title}
                  imgUrl={item.entry.images.webp.large_image_url}
                />
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}
