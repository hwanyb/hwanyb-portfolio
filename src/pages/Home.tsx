import React, { useEffect } from "react";
import styled from "styled-components";

import Footer from "../components/common/Footer";

const Base = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
`;
const Introduce = styled.div`
  margin-top: -150px;
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
