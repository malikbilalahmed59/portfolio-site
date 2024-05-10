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
        <div className="intro-subtitle">I create stuff sometimes.</div>
        <div className="intro-desc">
          I'm a software engineer from Islamabad, Pakistan, excelling in diverse
          freelance projects. Globally, I deliver impactful digital solutions,
          spanning intricate internal systems to public-facing websites across
          various industries..
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
