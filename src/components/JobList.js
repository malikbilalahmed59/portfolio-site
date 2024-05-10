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
    Freelance: {
      jobTitle: "",
      duration: "AUGUST 2022 - PRESENT",
      desc: [
        "Troubleshoot, debug, and upgrade existing software.",
        "Managed multiple projects simultaneously, ensuring timely delivery and quality standards.",
        "Designing and implementing databases for web applications.",
        "Problem Solving: Regularly tackled complex challenges, finding innovative solutions.",
        "Maintained clear, effective communication with clients to understand their needs and provide updates",
        "Continuously upgraded skills to stay relevant in the ever-evolving freelance market.",
      ],
    },
    "xEarn Dao LLC, US (Remote)": {
      jobTitle: "Front-End Developer @",
      duration: "APRIL 2023 - NOVEMBER 2023",
      desc: [
        "Collaborate closely with a team of Full-stack engineers, with a primary focus on front-end development while also contributing to back-end tasks.",
        "Translating Figma designs into fully functional React applications.",
        "Employing Material UI and style components to create an aesthetically pleasing user interface.",
      ],
    },
    "BPO Flexible, Sri Lanka (Remote)": {
      jobTitle: "Full Stack Web Developer @",
      duration: "April 2023 – June 2023",
      desc: [
        "Designing and implementing databases for web applications.",
        "Refactoring component logic to improve code reusability.",
        "Actively participating in developer meetings to contribute to project updates.",
        "Translating Figma designs into fully functional React applications.",
        "Utilizing Bootstrap 5 to create an appealing and user-friendly UI.",
        "Demonstrating proficiency in technologies to successfully achieve project objectives.",
      ],
    },
    "Code Hub Systems, Islamabad": {
      jobTitle: "Software Engineer @",
      duration: "Feb 2023 – August 2023",
      desc: [
        "Troubleshoot, debug, and upgrade existing software.",
        "Actively involved in multiple projects and play a crucial role in developing new features and ensuring bug-free applications.",
        "Peer’s code review and drop comments against the code.",
        "Responsible for UI leveraging React and for styling using Material Design.",
        "Actively involved in frontend and backend development of Software applications.",
        "Attend daily standup to share progress and discuss any blockers.",
        "Sprint planning with the development and product team.",
      ],
    },
    "National Highways & Motoway Police, G-11/1 Islamabad": {
      jobTitle: "Software Developer Intern @",
      duration: "JUNE 2022 - AUGUST 2022",
      desc: [
        "Troubleshoot, debug, and upgrade existing software.",
        "Actively involved in multiple projects and play a crucial role in developing new features and ensuring bug-free applications.",
        "Actively involved in frontend and backend development of Software applications.",
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
