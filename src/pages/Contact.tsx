import React from "react";
import styled from "styled-components";

import Comment from "../components/Comment";
import Footer from "../components/common/Footer";
import { DarkModeProps } from "../components/common/Layout";

const Base = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
`;
const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;
const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.windowSize.tablet} {
  flex-direction: column;
  align-items: start;
  }
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  line-height: 2.5rem;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  white-space: nowrap;
  &::before {
    content: "";
    width: 3px;
    height: 1rem;
    background-color: ${(props) => props.theme.color.textColor};
    display: inline-block;
    margin-right: 10px;
  }
`;
const Desc = styled.p`
  margin-left: 1rem;
  @media ${(props) => props.theme.windowSize.tablet} {
  margin-left: 0;
  }
`;
const A = styled.a`
  margin-left: 1rem;
  color: ${(props) => props.theme.color.textColor};
  @media ${(props) => props.theme.windowSize.tablet} {
  margin-left: 0;
  }
`;

export default function Contact({ isDarkMode, setIsDarkMode }: DarkModeProps) {
  return (
    <Base>
      <ContactContainer>
        <ContactWrapper>
          <Label>Phone</Label>
          <Desc>010-3050-3337</Desc>
        </ContactWrapper>
        <ContactWrapper>
          <Label>E-mail</Label>
          <Desc>mnn9502@naver.com</Desc>
        </ContactWrapper>
        <ContactWrapper>
          <Label>Kakao</Label>
          <A href="https://open.kakao.com/o/skoIijjf" target="_blank">
            오픈채팅방 링크
          </A>
        </ContactWrapper>
      </ContactContainer>
      <Comment isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </Base>
  );
}
