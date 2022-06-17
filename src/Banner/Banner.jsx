import React from "react";
import TextLoop from "react-text-loop";
import "./Banner.css";

const BannerText = () => {
  return (
    <section className="banner-container" id="home">
      <div className="banner-text container">
        <h1>Hello, I'm Favour Akpasi.</h1> <br />
        <h1>
          I'm a Software{" "}
          <TextLoop mask={true}>
            <h1 className="red"> Designer_</h1>
            <h1 className="blue">Developer_</h1>
          </TextLoop>
        </h1>
      </div>
    </section>
  );
};

export default BannerText;
