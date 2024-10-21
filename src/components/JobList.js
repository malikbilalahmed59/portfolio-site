import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "(Freelancer) Upwork": {
      jobTitle: "Full-stack Developer @",
      duration: "February 2024 — Present",
      desc: [
        "Freelancing on Upwork as a Web Developer specializing in Python, Django, React, and TypeScript.",
        "Delivered backend solutions with Python and Django.",
        "Developed dynamic front-end applications using React and TypeScript.",
        "Expanded expertise to LLMs and LangChain for intelligent applications.",
        "Provided high-quality, scalable solutions to clients across various industries.",
      ],
    },
    "Codistan Ventures , Islamabad": {
      jobTitle: "Back End Developer @",
      duration: "December 2022 — September 2023",
      desc: [
        "Gained expertise in Django and Django Rest Framework for backend development.",
        "Developed and maintained robust APIs and managed databases.",
        "Optimized server-side performance for scalability and efficiency.",
        "Hands-on experience with Docker and AWS for cloud deployment.",
        "Contributed to containerized, scalable backend solutions.",
      ],
    },
    "Code Hub Systems , Islamabad": {
      jobTitle: "Junior Web Developer @",
      duration: "March 2022 — November 2022",
      desc: [
        "Gained expertise in React and TypeScript for scalable web applications.",
        "Developed and maintained user-friendly front-end features.",
        "Enhanced proficiency in responsive design and UI/UX optimization.",
        "Delivered high-quality, performance-driven projects on time.",
        "Collaborated with cross-functional teams to ensure project success.",
      ],
    },
    "Intern, Absoluit · Part-time, Islamabad": {
      jobTitle: "Intern @",
      duration: "April 2021 — October 2021",
      desc: [
        "Mastered Python fundamentals for web development.",
        "Gained hands-on experience with Django for dynamic web applications.",
        "Worked on full-stack projects involving front-end and back-end development.",
        "Developed expertise in RESTful APIs and database integration.",
        "Collaborated with cross-functional teams to optimize and enhance applications.",
        "Strengthened understanding of software development best practices for scalability.",
      ],
    },
  };
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
