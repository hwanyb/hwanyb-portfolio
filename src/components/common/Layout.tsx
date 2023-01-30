import React from "react";
import Header from "./Header";
import styled from "styled-components";

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Base>
      <Header />
      <Main>{children}</Main>
    </Base>
  );
}
