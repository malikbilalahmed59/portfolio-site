import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Breazy AI": {
        title: "Breazy AI",
        desc:
          "The ultimate productivity tool! Chat effortlessly, translate seamlessly, summarize efficiently, write flawlessly, gain deep insights, and prompt with ease.",
        techStack: "React Js, Bootstrap 5, Node.js (Express.js)",
        link: "",
        open: "https://breazy.ai/en/",
        image: "/assets/breazy.JPG",
      },
      "Daily Voting": {
        title: "Daily Voting",
        desc:
          "Your ultimate platform for creating and participating in surveys and voting. Express your opinions, gain insights, and engage with a vibrant community effortlessly",
        techStack: "CSS, Bootstrap 4, Javascript, Ajax, Codeigniter 4, SQL",
        link: "",
        open: "https://dailyvoting.com/",
        image: "/assets/voting.png",
      },
      "AI Tattoo Generator": {
        title: "AI Tattoo Generator",
        desc:
          "An innovative website that harnesses the power of artificial intelligence to craft unique and personalized tattoo designs, blending technology with artistic creativity to bring your tattoo visions to life.",
        techStack: "CSS, Bootstrap 4, React Js, Vite,  Midjourney API",
        link: "",
        open: "https://dailyvoting.com/",
        image: "/assets/tattoo.jpg",
      },
      "T-Shirt Generator": {
        title: "T-Shirt Generator",
        desc:
          "This inventive website leverages the power of Midjourney's AI to revolutionize T-shirt design. It offers a unique, user-friendly platform where your ideas are seamlessly transformed into fashionable, custom-made T-shirts...",
        techStack: "CSS, Bootstrap 4, React Js, Vite,  Midjourney API",
        link: "",
        open: "https://t-shirt-ai.vercel.app/",
        image: "/assets/t-shirt.jpg",
      },
      "High Intellect Bot": {
        title: "High Intellect Bot",
        desc: "",
        techStack:
          "Vite, React Js, Chakra UI, Typescript, React Query, Django Rest API, Langchain , Mongodb",
        link: "",
        open: "https://high-intellect-bot-react-ts.vercel.app/govt-contract",
        image: "/assets/seai.jpg",
      },
    };
    const projects = {
      "Breazy AI": {
        desc:
          "The ultimate productivity tool! Chat effortlessly, translate seamlessly, summarize efficiently, write flawlessly, gain deep insights, and prompt with ease.",
        techStack: "React Js, Bootstrap 5, Node.js (Express.js)",
        link: "",
        open: "https://breazy.ai/en/",
      },
      "High Intellect Bot": {
        desc: "The ",
        techStack:
          "Vite, React Js, Chakra UI, Typescript, React Query, Django Rest API, Langchain , Mongodb",
        link: "",
        open: "https://high-intellect-bot-react-ts.vercel.app/govt-contract",
      },
      "Daily Voting": {
        desc:
          "Your ultimate platform for creating and participating in surveys and voting. Express your opinions, gain insights, and engage with a vibrant community effortlessly",
        techStack: "CSS, Bootstrap 4, Javascript, Ajax, Codeigniter 4, SQL",
        link: "",
        open: "https://dailyvoting.com/",
      },
      "Resume Builder": {
        desc:
          "This intelligent solution empowers individuals to create professional resumes that effectively showcase their strengths and qualifications for their desired positions",
        techStack: "Vite, React Js, Bootstrap 5, Node.js (Express.js), Open AI",
        link: "",
        open: "https://resume-builder-xj3m.vercel.app/",
      },
      "AI Tattoo Generator": {
        desc: "Lorem 5",
        techStack:
          "Vite React Js, Bootstrap 5, Node.js (Express.js), Midjourney API",
        open: "https://tatto-generator.vercel.app/",
      },
      "AI T-Shirt Generator": {
        desc: "lorem ",
        techStack:
          "Vite React Js, Bootstrap 5, Node.js (Express.js), Midjourney API",
        link: "",
        open: "https://t-shirt-ai.vercel.app/",
      },
      "Subeza E-Commerce": {
        desc:
          "Subeza is an online multi-vendor platform that offers a diverse selection of products and services, connecting buyers with sellers in a seamless shopping experience.",
        techStack: "CSS, Bootstrap 4, Javascript, Ajax, Codeigniter 4, SQL",
        open: "https://subeza.com/",
      },
      "RFM Official": {
        desc:
          "Let's harmonize with RFM Official to create a musical masterpiece",
        techStack: "CSS, Bootstrap 4, Vite, React Js",
        open: "https://aimusicmaker.io/",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
