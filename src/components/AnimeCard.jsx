import ViewRecommendationButton from "./ViewRecommendationButton";
import ViewAnimeButton from "./ViewAnimeButton";
export default function AnimeCard(props) {
    
  //change card layout based on data from api
  if (props.synopsis) {
    return (
      <div className="search-entry">
        <img src={props.imgUrl} alt="" />
        <div className="details">
          <h2 className="entry-title"> {props.title}</h2>
          <div>
            <p className="genre-demographic-label"> Genres & Demographic</p>
            <p className="genre-demographic">
              {[props.genresAndDemographics.join(", ")]}
            </p>
          </div>
          <p className="synopsis">{props.synopsis}</p>
          <div className="metrics">
            <div className="score">
              <p className="metrics-label">Score</p>
              <p className="metrics-value">{props.score}</p>
            </div>
            <div className="episodes">
              <p className="metrics-label">Episodes</p>
              <p className="metrics-value">{props.episodes}</p>
            </div>
            <div className="release-date">
              <p className="metrics-label">year</p>
              <p className="metrics-value">{props.year}</p>
            </div>
          </div>{" "}
          <ViewRecommendationButton id={props.id} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="search-entry">
        <img src={props.imgUrl} alt="" />
        <div className="details">
          <h2 className="entry-title"> {props.title}</h2>
          <ViewAnimeButton title={props.title} />
        </div>
      </div>
    );
  }
}
