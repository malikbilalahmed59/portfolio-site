import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import { NAME } from "../constant";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        I'm a passionate freelance software engineer, currently engaging in
        various challenging projects that fuel my love for technology. Having
        completed my Bachelor of Science in Software Engineering from{" "}
        <a href="https://szabist-isb.edu.pk/" target="_blank" rel="noreferrer">
          SZABIST Islamabad
        </a>{" "}
        , I've been honing my skills to create innovative digital solutions that
        make a real impact.
      </p>
    );
    const two = (
      <p>
        Away from coding, I am also SuperHost on Airbnb Where strangers become friends, and memories are made!.
      </p>
    );

    const tech_stack = [
      "React Js",
      "Typescript",
      "Node Js",
      "Express Js",
      "Vite",
      "React Query",
      "Next Js",
      "Langchain",
      "Python",
      "Django"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt={NAME} src={"/assets/me2.png"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
