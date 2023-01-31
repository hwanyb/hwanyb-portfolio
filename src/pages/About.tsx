import React from "react";
import styled from "styled-components";

import profileData from "../data/profile.json";
import educationData from "../data/education.json";
import cerficationData from "../data/certification.json";
import frontendSkillData from "../data/frontendSkill.json";
import etcSkillData from "../data/etcSkill.json";

const Base = styled.div``;
const ProfileWrapper = styled.div``;
const ProfileImg = styled.div``;
const NameWrapper = styled.div``;
const ProfileDetail = styled.ul``;
const ProfileItem = styled.li`
  display: flex;
`;
const ProfileLabel = styled.p``;
const ProfileContent = styled.p``;

const DetailContainer = styled.div``;
const DetailWrapper = styled.ul``;
const Title = styled.h2``;
const DetailItem = styled.li``;
const Label = styled.label``;
const SubTitle = styled.h3``;
const Desc = styled.p`
  white-space: pre;
`;

const SkillDesc = styled.p`
  position: absolute;
  display: none;
`;
const SkillWrapper = styled.div``;
const SkillItem = styled.div`
  @media (hover: hover) {
    &:hover {
      & ${SkillDesc} {
        display: block;
      }
    }
  }
`;
const SkillText = styled.p``;

export default function About() {
  return (
    <Base>
      <ProfileWrapper>
        <ProfileImg></ProfileImg>
        <NameWrapper>
          <h1>변환희</h1>
          <h4>Byun Hwanhee</h4>
        </NameWrapper>
        <ProfileDetail>
          {profileData.map((item) => (
            <ProfileItem key={item.id}>
              <ProfileLabel>{item.label}</ProfileLabel>
              <ProfileContent>{item.content}</ProfileContent>
            </ProfileItem>
          ))}
        </ProfileDetail>
      </ProfileWrapper>

      <DetailContainer>
        <DetailWrapper>
          <Title>Education.</Title>
          {educationData.map((item) => (
            <DetailItem key={item.id}>
              <Label>{item.duration}</Label>
              <SubTitle>{item.title}</SubTitle>
              <Desc>{item.desc}</Desc>
            </DetailItem>
          ))}
        </DetailWrapper>

        <DetailWrapper>
          <Title>Certificarion.</Title>
          {cerficationData.map((item) => (
            <DetailItem key={item.id}>
              <Label>{item.title}</Label>
              <Desc>{item.date}</Desc>
              <Desc>{item.desc}</Desc>
            </DetailItem>
          ))}
        </DetailWrapper>

        <DetailWrapper>
          <Title>Skill Set.</Title>
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
                <SkillText>{item.title}</SkillText>
                <SkillDesc>{item.desc}</SkillDesc>
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
                <SkillText>{item.title}</SkillText>
                <SkillDesc>{item.desc}</SkillDesc>
              </SkillItem>
            ))}
          </SkillWrapper>
        </DetailWrapper>
      </DetailContainer>
    </Base>
  );
}
