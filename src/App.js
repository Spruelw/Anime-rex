import Home from "./components/home.jsx";
import NavBar from "./components/NavBar.jsx";
import Search from "./components/Search.jsx";
import Recommendations from "./components/Recommendations.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


export default function App() {
 
  return (
  
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/navbar" element={<NavBar />}></Route>
        <Route path="/search" element={<Search  />}></Route>
        <Route path="/recommendations/:id?" element={<Recommendations />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


