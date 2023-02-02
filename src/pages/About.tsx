import React from "react";
import styled from "styled-components";

import profileData from "../data/profile.json";
import educationData from "../data/education.json";
import cerficationData from "../data/certification.json";
import frontendSkillData from "../data/frontendSkill.json";
import etcSkillData from "../data/etcSkill.json";

const Base = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  @media ${(props) => props.theme.windowSize.tablet} {
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    padding: 50px 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding-right: 2rem;
    /* mobile viewport bug fix */
    /* iOS only */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
      min-height: -webkit-fill-available;
    }
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media ${(props) => props.theme.windowSize.tablet} {
    flex-direction: column;
    height: auto;
  }
`;
const ProfileWrapper = styled.div`
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${(props) => props.theme.windowSize.tablet} {
    margin-right: 0;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
`;
const ProfileImg = styled.div`
  border-radius: 150px;
  width: 300px;
  height: 400px;
  background-image: url(${process.env.PUBLIC_URL}/assets/profileImg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: ${(props) => props.theme.color.borderColor};
  @media ${(props) => props.theme.windowSize.desktop} {
    width: 250px;
    height: 350px;
  }
  @media ${(props) => props.theme.windowSize.tablet} {
    width: 200px;
    height: 300px;
  }
`;
const NameWrapper = styled.div`
  & h1 {
    font-size: 4rem;
    font-weight: 900;
  }
  & h4 {
    font-size: ${(props) => props.theme.fontSize.base};
    font-weight: 400;
    margin-top: 1rem;
  }
  margin-bottom: 4rem;
`;
const ProfileDetail = styled.ul``;
const ProfileItem = styled.li`
  display: flex;
  line-height: 2rem;
`;
const ProfileLabel = styled.p`
  width: 100px;
  font-size: ${(props) => props.theme.fontSize.base};
  display: flex;
  align-items: center;
  font-weight: 400;
  &::before {
    content: "";
    width: 3px;
    height: 1rem;
    background-color: ${(props) => props.theme.color.textColor};
    display: inline-block;
    margin-right: 10px;
  }
`;
const ProfileContent = styled.p`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 700;
`;

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    width: 100%;
  }
  @media ${(props) => props.theme.windowSize.tablet} {
    margin-top: 100px;
    gap: 4rem;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    align-items: center;
  }
`;
const DetailWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${(props) => props.theme.windowSize.mobile} {
    flex-direction: column;
    margin: 0 auto;
    gap: 1.5rem;
  }
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 900;
  margin-bottom: 0.5rem;
  @media ${(props) => props.theme.windowSize.mobile} {
    text-align: center;
  }
`;
const DetailItem = styled.li``;
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
  @media ${(props) => props.theme.windowSize.mobile} {
    justify-content: center;
  }
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 600;
  @media ${(props) => props.theme.windowSize.mobile} {
    text-align: center;
  }
`;
const Desc = styled.p`
  white-space: pre;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
  margin-top: 10px;
  @media ${(props) => props.theme.windowSize.mobile} {
    text-align: center;
  }
`;

const SkillDesc = styled.p`
  position: absolute;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.color.bgColor};
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  border-radius: 30px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  & b {
    font-weight: 600;
  }
`;

const SkillContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;
const SkillWrapper = styled.div`
  position: relative;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  box-shadow: 0 0 10px rgba(9, 9, 9, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
  & ${Desc} {
    position: absolute;
    top: -1rem;
  }
`;
const SkillItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  @media (hover: hover) {
    &:hover {
      & ${SkillDesc} {
        display: flex;
      }
    }
  }
`;

export default function About() {
  return (
    <Base>
      <Container>
        <ProfileWrapper>
          <ProfileImg />
          <ProfileDetail>
            <NameWrapper>
              <h1>변환희</h1>
              <h4>Byun Hwanhee</h4>
            </NameWrapper>
            {profileData.map((item) => (
              <ProfileItem key={item.id}>
                <ProfileLabel>{item.label}</ProfileLabel>
                <ProfileContent>{item.content}</ProfileContent>
              </ProfileItem>
            ))}
          </ProfileDetail>
        </ProfileWrapper>

        <DetailContainer>
          <div>
            <Title>Education.</Title>
            <DetailWrapper>
              {educationData.map((item) => (
                <DetailItem key={item.id}>
                  <Label>{item.duration}</Label>
                  <SubTitle>{item.title}</SubTitle>
                  <Desc>{item.desc}</Desc>
                </DetailItem>
              ))}
            </DetailWrapper>
          </div>
          <div>
            <Title>Certificarion.</Title>
            <DetailWrapper>
              {cerficationData.map((item) => (
                <DetailItem key={item.id}>
                  <Label>{item.title}</Label>
                  <Desc>{item.date}</Desc>
                  <Desc>{item.desc}</Desc>
                </DetailItem>
              ))}
            </DetailWrapper>
          </div>
          <div>
            <Title>Skill Set.</Title>
            <SkillContainer>
              <SkillWrapper>
                <Desc>Front-End</Desc>
                {frontendSkillData.map((item) => (
                  <SkillItem key={item.id}>
                    <svg
                      role="img"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                    >
                      <path d={item.icon} fill={item.color}></path>
                    </svg>
                    <SkillDesc>
                      <b>{item.title}</b>
                      <br />
                      {item.desc}
                    </SkillDesc>
                  </SkillItem>
                ))}
              </SkillWrapper>
              <SkillWrapper>
                <Desc>ETC.</Desc>
                {etcSkillData.map((item) => (
                  <SkillItem key={item.id}>
                    <svg
                      role="img"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                    >
                      <path d={item.icon} fill={item.color}></path>
                    </svg>
                    <SkillDesc>
                      <b>{item.title}</b>
                      <br />
                      {item.desc}
                    </SkillDesc>
                  </SkillItem>
                ))}
              </SkillWrapper>
            </SkillContainer>
          </div>
        </DetailContainer>
      </Container>
    </Base>
  );
}
