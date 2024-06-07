import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import article1img from "./assets/images/article1.png";

import article2img from "./assets/images/article2.png";
import article3img from "./assets/images/article3.png";
import "./styles/styles.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="Nasa"
            pic={article1img}
          />
          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            pic={article2img}
          />
          <Article
            title="36 Days of Malatyalam type"
            provider="Spaceflight Now"
            pic={article3img}
          />
        </section>
      </>
    );
  }
}

export default App;
