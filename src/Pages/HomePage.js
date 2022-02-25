import React from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import ParticleBackground from "../Components/Particles";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <ParticleBackground />
      </div>
      <div className="typography">
        <h1 className="homeTitle">
          Hi, I'm <span>Siddharth Koundal</span>
        </h1>
        <p>
          Allow me to introduce myself: I am a second year undergraduate at BITS
          Pilani, K.K. Birla Goa Campus. I'm passionate about Web Development
          and I want to use technology to help make people's lives more
          fulfilling. You can find me on LinkedIn, Github and Instagram,
          download my resume, or shoot me an email.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/siddharth-koundal-b3663317a/"
            target="_blank"
            className="icon i-linkedIn"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/siddharthkoundal"
            target="_blank"
            className="icon i-github"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.instagram.com/siddharthkoundal/"
            className="icon i-instagram"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .homeTitle {
    margin-bottom: 1.5rem;
    @media screen and (max-width: 502px) {
      margin-bottom: 1rem;
    }
  }

  .particle-con {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    h1 {
      font-family: "Titillium Web", sans-serif;
      font-size: 3.4rem !important;
      span {
        font-size: 3.5rem !important;
      }
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-instagram {
        &:hover {
          border: 2px solid #405de6;
          color: #405de6;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
      .i-linkedIn {
        &:hover {
          border: 2px solid #0077b5;
          color: #0077b5;
        }
      }
    }
  }
`;

export default HomePage;
