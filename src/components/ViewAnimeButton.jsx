import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ViewAnimeButton(props) {
  const navigate = useNavigate();
  //send title to Search component
  async function sendSearchRequest() {
    var config = {
      params: { q: props.title },
    };
    try {
      var result = await axios.get("https://api.jikan.moe/v4/anime", config);
      navigate("/Search", { state: { searchResults: result.data } });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button className="view-anime-button" onClick={sendSearchRequest}>
      View anime
    </button>
  );
}
