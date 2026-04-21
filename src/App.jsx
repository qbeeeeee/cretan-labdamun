import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageGallery from "./components/ImageGallery";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="">
      <div id="home" className="min-h-25">
        <Header />
      </div>

      <Hero />

      <div id="gallery">
        <ImageGallery />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
