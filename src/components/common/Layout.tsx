import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "./Header";
import Background from "./Background";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 200px;
  @media ${(props) => props.theme.windowSize.desktop} {
    padding: 0 150px;
  }
  @media ${(props) => props.theme.windowSize.laptop} {
    padding: 0 100px;
  }
  @media ${(props) => props.theme.windowSize.tablet} {
    padding: 0 50px;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    padding: 0 20px;
  }
`;
const Main = styled.main`
  width: 100%;
  height: calc(100% - 100px);
  @media ${(props) => props.theme.windowSize.tablet} {
    height: calc(100% - 150px);
  }
`;

export default function Layout() {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} timeout={1000} classNames="fade">
        <Base>
          <Background />
          <Header />
          <Main>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Main>
        </Base>
      </CSSTransition>
    </TransitionGroup>
  );
}
