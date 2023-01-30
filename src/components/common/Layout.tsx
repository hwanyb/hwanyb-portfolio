import React, { ReactNode } from "react";
import Header from "./Header";
import styled from "styled-components";

const Base = styled.div``;
const Main = styled.main``;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Base>
      <Header />
      <Main>{children}</Main>
    </Base>
  );
}
