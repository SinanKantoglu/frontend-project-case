import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import JoinSection from "./components/JoinSection";
import Comments from "./components/Comments";
import Collection from "./components/Collection";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Categories/>
      <JoinSection/>
      <Comments/>
      <Collection/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
