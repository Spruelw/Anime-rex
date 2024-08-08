import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
const navigate = useNavigate()
 
  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  async function sendSearchRequest() {
    var config = {
        params:{ q: searchInput,}
    }
   try{
   var result = await axios.get("https://api.jikan.moe/v4/anime", config)
navigate("/Search", {state:{searchResults: result.data }})
    }catch(err){
        console.log(err)
    }
  }

  return (
    <div className="search-bar">
      <input type="text" placeholder="Enter an anime" onChange={handleChange} />
      <button onClick={sendSearchRequest}>Search</button>
    </div>
  );
}
