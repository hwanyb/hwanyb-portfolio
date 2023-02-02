import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const FadeAni = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`;
const TopAni = keyframes`
from {
    opacity: 0;
          top: -50px;
}
to {
    opacity: 1;
          top: 0;
}
`;
const LeftAni = keyframes`
from{
    opacity: 0;
          top: -50px;
}
to{
    opacity: 1;
          top: 30px;
          left: -1px;
}
`;
const RightAni = keyframes`
    from{
        opacity: 0;
          top: -50px;
    }
    to{
        opacity: 1;
          top: 7px;
          right: 0px;
    }
`;

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  animation: ${FadeAni} 1s 2.5s ease-in-out 1 forwards;
  @media ${(props) => props.theme.windowSize.mobile} {
    /* mobile viewport bug fix */
    /* iOS only */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
      min-height: -webkit-fill-available;
    }
  }
`;
const Logo = styled.div`
  position: absolute;
  width: 136.26px;
  left: 50%;
  top: 45%;
  transform: translateX(-25%);
`;
const LogoTop = styled.img`
  position: absolute;
  animation: ${TopAni} 0.7s 0.5s ease-in-out 1 forwards;
  opacity: 0;
`;
const LogoLeft = styled.img`
  position: absolute;
  animation: ${LeftAni} 0.7s 0.25s ease-in-out 1 forwards;
  opacity: 0;
`;
const LogoRight = styled.img`
  position: absolute;
  transition: all 0.7s ease-in-out;
  animation: ${RightAni} 0.7s ease-in-out 1 forwards;
  opacity: 0;
`;

type Props = {
  isDarkMode: boolean | null;
};

export default function Loading({ isDarkMode }: Props) {
  return (
    <Base>
      <Logo>
        <LogoTop
          src={
            isDarkMode
              ? process.env.PUBLIC_URL + "/assets/logo_top_dark.png"
              : process.env.PUBLIC_URL + "/assets/logo_top.png"
          }
        />
        <LogoLeft
          src={
            isDarkMode
              ? process.env.PUBLIC_URL + "/assets/logo_left_dark.png"
              : process.env.PUBLIC_URL + "/assets/logo_left.png"
          }
        />
        <LogoRight
          src={
            isDarkMode
              ? process.env.PUBLIC_URL + "/assets/logo_right_dark.png"
              : process.env.PUBLIC_URL + "/assets/logo_right.png"
          }
        />
      </Logo>
    </Base>
  );
}
