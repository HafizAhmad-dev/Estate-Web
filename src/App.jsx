import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div>
      <div className="bg-[url('./assets/bgImage.png')] h-screen w-screen bg-cover bg-center grid grid-rows-[auto_1fr]">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default App;
