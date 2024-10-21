import React from "react";
import { Email } from "./../constant.js";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

function Intro() {
  // constructor() {
  //   super();
  //   this.state = {
  //     expanded: true,
  //     activeKey: "1",
  //     visible: true,
  //   };
  //   this.handleSelect = this.handleSelect.bind(this);
  // }
  // handleSelect(eventKey) {
  //   this.setState({
  //     activeKey: eventKey,
  //   });
  // }
  // render() {
  return (
    <div id="intro">
      <FractalTree></FractalTree>
      <Typist avgTypingDelay={120}>
        <span className="intro-title">
          {"Hello, "}
          <span className="intro-name">{"I'm Bilal"}</span>
        </span>
      </Typist>
      <FadeInSection>
      <div className="intro-subtitle">I deliver impactful digital solutions.</div>
        <div className="intro-desc">
    You’ve built a business that delivers excellence, but is your website telling the same story? 
    I’m a software engineer from Islamabad, specializing in giving businesses like yours the 
    digital makeover they deserve. From outdated designs to poor SEO, I help transform your online 
    presence into a powerful tool that attracts customers and showcases the quality of your services. 
    Let’s turn your website into a growth engine that reflects the true potential of your business.
  </div>
        <a href={`mailto:${Email}`} className="intro-contact">
          <EmailRoundedIcon></EmailRoundedIcon>
          {" Say hi!"}
        </a>
      </FadeInSection>
    </div>
  );
  // }
}

export default Intro;
