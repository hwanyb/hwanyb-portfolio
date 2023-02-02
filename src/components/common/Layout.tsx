import React, { SetStateAction, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "./Header";
import Background from "./Background";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";

const Base = styled.div<{ innerHeight: number }>`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${(props) => props.theme.windowSize.desktop} {
    padding: 0 100px;
  }
  @media ${(props) => props.theme.windowSize.laptop} {
    padding: 0 50px;
  }
  @media ${(props) => props.theme.windowSize.tablet} {
    padding: 0 30px;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    padding: 0 20px;
    /* mobile viewport bug fix */
    /* iOS only */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
      min-height: -webkit-fill-available;
    }
  }
`;
const Main = styled.main`
  width: 100%;
  height: calc(100% - 100px);
  bottom: 0;
  @media ${(props) => props.theme.windowSize.tablet} {
    /* height: calc(100% - 150px); */
  }
`;
export type DarkModeProps = {
  isDarkMode: boolean | null;
  setIsDarkMode: React.Dispatch<SetStateAction<boolean | null>>;
};
export default function Layout({ isDarkMode, setIsDarkMode }: DarkModeProps) {
  const location = useLocation();
  const [innerHeight, setInnerHeight] = useState<number>(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerHeight(window.innerHeight);
    }
  }, []);
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} timeout={1000} classNames="fade">
        <Base innerHeight={innerHeight}>
          <Background />
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Main>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/contact"
                element={
                  <Contact
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                  />
                }
              />
            </Routes>
          </Main>
        </Base>
      </CSSTransition>
    </TransitionGroup>
  );
}
