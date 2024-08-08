import { useNavigate } from "react-router-dom";

export default function ViewRecommendationButton(props){
  function handleCLick(){
    //navigate to recommendations/:props.id
    navigate("/recommendations/" + props.id)
  }
  const navigate = useNavigate() 
  return (
    <button className="recommendation-button" onClick={handleCLick}> View recommendations</button>
  );
}
