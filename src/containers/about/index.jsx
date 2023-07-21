import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaReact} from "react-icons/fa";
import {BiLogoJavascript, BiLogoNodejs,BiLogoMongodb} from "react-icons/bi";

const personalDetails = [
  {
    label: "Name",
    value: "A Manikandan",
  },
  {
    label: "Age",
    value: "25",
  },
  {
    label: "Address",
    value: "No 1 Koval Nagar 3rd street Palangantham Madurai-625003",
  },
  {
    label: "Email",
    value: "mani120801@gmail.com",
  },
  {
    label: "Contact No",
    value: "9047146716",
  },
];

const jobSummary =
  "As a MERN stack developer, i have a strong foundation in web development, specializing in building dynamic and interactive web applications using the MERN stack. and am skilled and dedicated MERN (MongoDB, Express.js, React, Node.js) stack developer with a passion for creating cutting-edge web applications. With a background in information technology or computer science, i have honed my skills in front-end and back-end development, allowing you to design and implement full-stack solutions";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>MERN Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaReact size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <BiLogoNodejs size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <BiLogoJavascript size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <BiLogoMongodb size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
