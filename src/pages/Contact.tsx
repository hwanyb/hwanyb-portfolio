import React from "react";
import styled from "styled-components";

import Comment from "../components/Comment";
import Footer from "../components/common/Footer";
import { Label } from "./About";

const Base = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const ContactContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;
const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Desc = styled.p`
  margin-left: 1rem;
`;
const A = styled.a`
  margin-left: 1rem;
  color: ${(props) => props.theme.color.textColor};
`;

export default function Contact() {
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
      <Comment />
      <Footer />
    </Base>
  );
}
