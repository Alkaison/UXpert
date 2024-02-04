import React from "react";
import Hero from "./containers/Hero";
import Tips from "./containers/Tips";
import Questions from "./containers/Questions";
import Invitation from "./containers/Invitation";
import Footer from "./containers/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Tips />
      <Questions />
      <Invitation />
      <Footer />
    </React.Fragment>
  );
}

export default App;
