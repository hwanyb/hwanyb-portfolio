import React, { SetStateAction } from "react";
import { ProjectItem } from "../pages/Projects";
import { Label } from "../pages/Contact";
import styled, { css } from "styled-components";

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  z-index: 1111;
  top: 0;
  left: 0;
  @media ${(props) => props.theme.windowSize.mobile} {
    /* mobile viewport bug fix */
    /* iOS only */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
      min-height: -webkit-fill-available;
    }
  }
`;
const Container = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.color.bgColor};
  padding: 50px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.windowSize.desktop} {
    padding: 0 150px 50px 150px;
  }
  @media ${(props) => props.theme.windowSize.laptop} {
    padding: 0 100px 50px 100px;
  }
  @media ${(props) => props.theme.windowSize.tablet} {
    padding: 0 50px 50px 50px;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    padding: 0 20px 50px 20px;
  }
`;
const Header = styled.div`
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1111;
  padding: 50px 20px;
  background-color: ${(props) => props.theme.color.bgColor};
  text-align: center;
`;
const CloseBtn = styled.div`
  position: fixed;
  top: 20px;
  right: 200px;
  z-index: 11111;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  transition: all 0.2s ease-in-out;
  & span {
    top: 50%;
    right: 15%;
    position: absolute;
    width: 1.5rem;
    height: 1px;
    background-color: ${(props) => props.theme.color.textColor};
  }
  @media (hover: hover) {
    &:hover {
      opacity: 0.5;
    }
  }
  @media ${(props) => props.theme.windowSize.tablet} {
    right: 20px;
  }
`;

const Line1 = styled.span`
  transform: rotate(135deg) translateX(0%);
`;
const Line2 = styled.span`
  transform: rotate(45deg) translateX(0%);
`;
const Hr = styled.span`
  width: 10rem;
  height: 1px;
  background-color: ${(props) => props.theme.color.textColor};
  display: block;
  margin-bottom: 2rem;
`;
const Desc = styled.p`
  word-break: keep-all;
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 400;
  line-height: ${(props) => props.theme.fontSize.md};
`;
const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: 900;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
const LinkBtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  & a {
    text-decoration: none;
    color: ${(props) => props.theme.color.textColor};
  }
`;
const MockupImgWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  background-color: ${(props) => props.theme.color.textColor}10;
  @media ${(props) => props.theme.windowSize.tablet} {
    height: 300px;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    height: 200px;
  }
`;
const MockupImg = styled.img`
  object-fit: contain;
  width: 100%;
    @media ${(props) => props.theme.windowSize.mobile} {
      object-fit: cover;
      height: 200px;
  }
`;
const InfoWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 3rem;
  @media ${(props) => props.theme.windowSize.tablet} {
    display: flex;
    flex-direction: column;
  }
`;
const InfoItem = styled.li``;
const FeaturesWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 5rem;
  position: relative;
`;
const Features = styled.h3`
  word-break: keep-all;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 700;
  margin-bottom: 3rem;
  position: absolute;
  top: 50px;
`;
const FeatureItem = styled.li`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 3rem;
  @media ${(props) => props.theme.windowSize.desktop} {
    display: flex;
    flex-direction: column;
  }
`;
const FeatureImgWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const FeatureImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
const FeatureTextWrapper = styled.ul``;
const FeatureTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  margin-bottom: 1rem;
`;
const FeatureDesc = styled.li`
  list-style-type: "– ";
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.fontSize.lg};
  word-break: keep-all;
  font-weight: 400;
  margin-left: 10px;
`;

type Props = {
  setIsDetailOpened: React.Dispatch<SetStateAction<boolean>>;
  selectedData: ProjectItem | null;
};
export default function ProjectDetail({
  setIsDetailOpened,
  selectedData,
}: Props) {
  const features = selectedData?.features
    .map((feature) => feature.title)
    .join(" / ");
  return (
    <Base>
      {selectedData !== undefined && (
        <Container>
          <Header>
            <CloseBtn onClick={() => setIsDetailOpened(false)}>
              <Line1 />
              <Line2 />
            </CloseBtn>
            <Hr />
            <Desc>{selectedData?.scale}</Desc>
            <Title>{selectedData?.title}</Title>
            <LinkBtnWrapper>
              <button>
                <a href={selectedData?.githubLink} target="_blank">
                  Github
                </a>
              </button>
              <button>
                <a href={selectedData?.demoLink} target="_blank">
                  {selectedData?.titleEn}
                </a>
              </button>
            </LinkBtnWrapper>
            <Desc>{selectedData?.short}</Desc>
          </Header>

          <MockupImgWrapper>
            <MockupImg src={process.env.PUBLIC_URL + selectedData?.mockup!} />
          </MockupImgWrapper>
          <InfoWrapper>
            <InfoItem>
              <Label>Duration</Label>
              <Desc>{selectedData?.duration}</Desc>
            </InfoItem>
            <InfoItem>
              <Label>Skill Set</Label>
              <Desc>{selectedData?.skills}</Desc>
            </InfoItem>
            <InfoItem>
              <Label>Goal</Label>
              {selectedData?.goal.map((goal) => (
                <FeatureDesc key={goal.id}>{goal.text}</FeatureDesc>
              ))}
            </InfoItem>
          </InfoWrapper>
          <FeaturesWrapper>
            <Label>Features</Label>
            <Features>{features}</Features>
            {selectedData?.features.map((feature) => (
              <FeatureItem key={feature.id}>
                <FeatureImgWrapper>
                  <FeatureImg src={process.env.PUBLIC_URL + feature?.img} />
                </FeatureImgWrapper>
                <FeatureTextWrapper>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  {feature.desc.map((desc, idx: number) => (
                    <FeatureDesc key={idx}>{desc.text}</FeatureDesc>
                  ))}
                </FeatureTextWrapper>
              </FeatureItem>
            ))}
          </FeaturesWrapper>
        </Container>
      )}
    </Base>
  );
}
