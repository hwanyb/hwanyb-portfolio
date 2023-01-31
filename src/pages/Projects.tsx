import React, { useState } from "react";
import styled from "styled-components";

import projectsData from "../data/projects.json";
import ProjectDetail from "../components/ProjectDetail";

const Base = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 50px;
`;
const ProjectsContainer = styled.div`
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: mandatory;
  padding: 1rem;
`;
const ProjectsWrapper = styled.ul`
  width: fit-content;
  display: flex;
  gap: 4rem;
  margin-bottom: 50px;
`;
const ProjectItem = styled.li`
  width: 460px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.34s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  box-shadow: 0 0 10px rgba(9, 9, 9, 0.1);
  @media (hover: hover) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;
const ThumbnailWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  width: 100%;
  height: 250px;
  box-shadow: 0 0 10px rgba(9, 9, 9, 0.1);
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ThumbnailImg = styled.img`
width: 100%;
  object-fit: cover;
`;
const Desc = styled.p`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 400;
  word-break: keep-all;
  text-align: center;
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 800;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
const Skills = styled.p`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 500;
  text-align: center;
`;
const Hr = styled.span`
  width: 40px;
  height: 1px;
  background-color: ${(props) => props.theme.color.textColor};
  display: block;
  margin: 3rem 0;
`;
export type ProjectItem = {
  id: number;
  title: string;
  titleEn: string;
  thumbnail: string;
  scale: string;
  skills: string;
  short: string;
  githubLink: string;
  demoLink: string;
  duration: string;
  goal: {
    id: number;
    text: string;
  }[];
  mockup: string;
  features: {
    id: number;
    title: string;
    img: string;
    desc: {
      text: string
    }[]
  }[];
};
export default function Projects() {
  const [isDetailOpened, setIsDetailOpened] = useState(false);
  const [selectedData, setSelectedData] = useState<ProjectItem | null>(null);
  const onCardClick = (
    e: React.SyntheticEvent<HTMLLIElement>,
    item: ProjectItem,
  ) => {
    setIsDetailOpened(true);
    setSelectedData(item);
  };
  return (
    <>
      {isDetailOpened ? (
        <ProjectDetail
          selectedData={selectedData}
          setIsDetailOpened={setIsDetailOpened}
        />
      ) : (
        <Base>
          <ProjectsContainer>
            <ProjectsWrapper>
              {projectsData.sort((a, b) => b.id - a.id).map((item) => (
                <ProjectItem
                  key={item.id}
                  onClick={(e: React.SyntheticEvent<HTMLLIElement>) =>
                    onCardClick(e, item)
                  }
                >
                  <ThumbnailWrapper>
                    <ThumbnailImg
                      src={process.env.PUBLIC_URL + item.thumbnail}
                    />
                  </ThumbnailWrapper>
                  <Desc>{item.scale}</Desc>
                  <Title>{item.title}</Title>
                  <Skills>{item.skills}</Skills>
                  <Hr />
                  <Desc>{item.short}</Desc>
                </ProjectItem>
              ))}
            </ProjectsWrapper>
          </ProjectsContainer>
        </Base>
      )}
    </>
  );
}
