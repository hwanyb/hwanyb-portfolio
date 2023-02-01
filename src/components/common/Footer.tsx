import React from "react";
import styled, { keyframes } from "styled-components";

const Ani = keyframes`
from {
        stroke-dashoffset: 1260;
      }
      to {
        stroke-dashoffset: 2520;
      }
`;

const Base = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  position: absolute;
  bottom: 50px;
`;
const Circle1 = styled.svg`
  & path {
    animation: ${Ani} 2s 0.2s infinite ease-in-out;
  }
`;
const Circle2 = styled.svg`
  & path {
    animation: ${Ani} 3s infinite ease-in-out;
  }
`;
const ResumeWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (hover: hover) {
    &:hover {
      & path {
        fill: ${(props) => props.theme.color.textColor}10;
      }
    }
  }
  & svg {
    position: absolute;
  }
  & path {
    stroke: ${(props) => props.theme.color.textColor};
    fill: none;
    stroke-dasharray: 630;
  }
`;

const Text = styled.h3`
  position: absolute;
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 600;
  left: 50%;
  transform: translateX(-50%);
`;
const DetailWrapper = styled.div``;
const LinkBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
const LinkBtn = styled.button``;
const UpdateDate = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
  text-align: right;
  margin-top: 2rem;
  & b {
    font-weight: 800;
  }
`;
const Rights = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
  text-align: right;
`;

export default function Footer() {
  return (
    <Base>
      <ResumeWrapper>
        <Circle1
          width="209"
          height="123"
          viewBox="0 0 209 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M206.788 21.8306C211.643 34.4174 204.851 50.3021 189.56 65.8809C174.304 81.4244 150.726 96.5067 122.436 107.418C94.1458 118.328 66.5461 122.984 44.8038 121.71C23.0121 120.434 7.31312 113.223 2.45866 100.636C-2.39579 88.0495 4.3958 72.1648 19.6867 56.5859C34.9428 41.0424 58.5214 25.9601 86.8113 15.0493C115.101 4.13846 142.701 -0.517619 164.443 0.756361C186.235 2.03324 201.934 9.24382 206.788 21.8306Z" />
        </Circle1>
        <Circle2
          width="221"
          height="101"
          viewBox="0 0 221 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M220.061 53.9253C219.606 67.4081 207.143 79.3714 186.978 87.7292C166.858 96.0681 139.259 100.728 108.955 99.7053C78.6508 98.683 51.4284 92.1741 31.9162 82.4983C12.3595 72.8004 0.73099 60.0244 1.18583 46.5416C1.64067 33.0588 14.1037 21.0955 34.2695 12.7377C54.3895 4.39882 81.9886 -0.260708 112.292 0.761583C142.596 1.78387 169.819 8.29279 189.331 17.9686C208.888 27.6664 220.516 40.4425 220.061 53.9253Z" />
        </Circle2>
        <Text>résumé</Text>
      </ResumeWrapper>
      <DetailWrapper>
        <LinkBtnWrapper>
          <a href="https://github.com/hwanyb" target="_blank">
            <LinkBtn>Github</LinkBtn>
          </a>
          <a href="https://hwanyb.github.io/" target="_blank">
            <LinkBtn>Blog</LinkBtn>
          </a>
        </LinkBtnWrapper>
        <UpdateDate>
          Last Update : <b>2023.01.31</b>
        </UpdateDate>
        <Rights>Copyright 2023. byunhwanhee all rights reserved.</Rights>
      </DetailWrapper>
    </Base>
  );
}
