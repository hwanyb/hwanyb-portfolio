import React, { useEffect } from "react";
import styled from "styled-components";

import Footer from "../components/common/Footer";

const Base = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const Introduce = styled.div`
  margin-top: 15%;
  @media ${(props) => props.theme.windowSize.desktop} {
    margin-top: 20%;
  }
  @media ${(props) => props.theme.windowSize.laptop} {
    margin-top: 25%;
  }
  @media ${(props) => props.theme.windowSize.laptop} {
    margin-top: 40%;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    margin-top: 15%;
    text-align: center;
  }
`;
const Position = styled.h3`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 400;
  margin-bottom: 1rem;
`;
const Greeting = styled.h1`
  font-size: 4rem;
  font-weight: 200;
  & b {
    font-weight: 800;
  }

  @media ${(props) => props.theme.windowSize.laptop} {
    font-size: 3.5rem;
  }
  @media ${(props) => props.theme.windowSize.tablet} {
    font-size: 3rem;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    font-size: 2.5rem;
  }
`;

export default function Home() {
  return (
    <Base>
      <Introduce>
        <Position>Front-end Developer</Position>
        <Greeting>
          <b>안녕하세요 !</b>
          <br />
          프론트엔드 개발자를 꿈꾸는
          <br />
          <b>변환희</b>입니다.
        </Greeting>
      </Introduce>
      <Footer />
    </Base>
  );
}
