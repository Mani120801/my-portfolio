import React from "react";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm A Manikandan
          <br />
          MERN Stack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <a className="newone" href="mailto:mani120801@gmail.com">Hire Me</a>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
