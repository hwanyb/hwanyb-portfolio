import React from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  opacity: 0.7;
  & svg {
    position: fixed;
    fill: none;
    transition: all 4s ease-in-out;
  }
`;
const Yellow = styled.svg<{ location: string }>`
  top: 0;
  right: 0;
  ${(props) =>
    props.location === "/"
      ? css`
          width: 425px;
          filter: blur(100px);
          transform: translate(-30vw, 50vh);
        `
      : props.location === "/about"
      ? css`
          width: 700px;
          filter: blur(150px);
          transform: translate(-60vw, 10vh) rotate(20deg);
        `
      : props.location === "/projects"
      ? css`
          width: 500px;
          filter: blur(150px);
          transform: translate(-10vw, 50vh) rotate(174deg);
        `
      : css`
          width: 405px;
          filter: blur(100px);
          transform: translate(-60vw, 50vh) rotate(174deg);
        `}
`;
const Blue = styled.svg<{ location: string }>`
  top: 0;
  right: 0;
  ${(props) =>
    props.location === "/"
      ? css`
          width: 573px;
          filter: blur(100px);
          transform: translate(-10vw, 20vh);
        `
      : props.location === "/about"
      ? css`
          width: 800px;
          transform: translate(5vw, 30vh) rotate(45deg);
          filter: blur(150px);
        `
      : props.location === "/projects"
      ? css`
          width: 1000px;
          transform: translate(-55vw, -5vh) rotate(80deg);
          filter: blur(200px);
        `
      : css`
          width: 660px;
          transform: translate(-20vw, -5vh) rotate(280deg);
          filter: blur(100px);
        `}
`;
export default function Background() {
  const location = useLocation().pathname;
  return (
    <Base>
      <Yellow
        viewBox="0 0 425 345"
        xmlns="http://www.w3.org/2000/svg"
        location={location}
      >
        <path
          d="M0.760196 83.725C-10.2909 -69.6711 107.732 36.9319 243.144 27.1764C295.644 23.3942 414.832 65.6761 422.144 167.176C433.195 320.572 401.368 334.054 265.955 343.809C130.543 353.565 11.8113 237.121 0.760196 83.725Z"
          fill="#FFC960"
        />
      </Yellow>
      <Blue
        viewBox="0 0 573 581"
        xmlns="http://www.w3.org/2000/svg"
        location={location}
      >
        <path
          d="M572.395 450.755C572.395 699.701 420.627 513.861 233.413 513.861C46.1987 513.861 28 513.861 0 390.225C0 141.28 46.1987 0 233.413 0C420.627 0 572.395 201.81 572.395 450.755Z"
          fill="#63CAF7"
        />
      </Blue>
    </Base>
  );
}
