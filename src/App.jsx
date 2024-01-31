import React from "react";
import Hero from "./containers/Hero";
import Invitation from "./containers/Invitation";
import Footer from "./containers/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Invitation />
      <Footer />
    </React.Fragment>
  );
}

export default App;
