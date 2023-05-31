import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import { DarkModeProps } from "./Layout";

const Base = styled.header`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  @media ${(props) => props.theme.windowSize.tablet} {
    grid-template-columns: 1fr 1fr;
    margin-top: -20px;
  }
`;
const Logo = styled.svg`
  height: 40px;
  & path {
    fill: ${(props) => props.theme.color.textColor};
    fill-rule: evenodd;
    clip-rule: evenodd;
  }
  @media ${(props) => props.theme.windowSize.tablet} {
    height: 35px;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    height: 30px;
  }
`;
const Nav = styled.nav`
  display: flex;
  gap: 3rem;
  margin-right: 3rem;
  @media ${(props) => props.theme.windowSize.tablet} {
    position: absolute;
    width: calc(100% - 60px);
    top: 80px;
    margin-right: 0;
    justify-content: space-between;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    width: calc(100% - 40px);
    top: 70px;
  }
`;
const NavItem = styled(Link)<{ currentPath: string }>`
  transition: all 0.5s ease-in-out;
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.color.textColor};
  text-decoration: none;
  ${(props) =>
    props.currentPath === props.id
      ? css`
          font-weight: 800;
          opacity: 1;
        `
      : css`
          font-weight: 200;
          opacity: 0.5;
          @media (hover: hover) {
            &:hover {
              opacity: 1;
            }
          }
        `}
`;
const ModeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: flex-end;
`;
const ModeIcon = styled.svg`
  height: 30px;
  transition: all 0.5s ease-in-out;

  & path {
    fill: ${(props) => props.theme.color.textColor};
    fill-rule: evenodd;
    clip-rule: evenodd;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    height: 20px;
  }
`;
const ToggleBtn = styled.button<{ isDarkMode: boolean | null }>`
  padding: 3px;
  width: 2.5rem;
  height: fit-content;
  display: flex;
  justify-content: ${(props) => (props.isDarkMode ? "end" : "start")};
  transition: all 0.5s ease-in-out;
  @media (hover: hover) {
    &:hover {
      & div {
        transition: all 0.2s ease-in-out;
        opacity: 0.5;
      }
    }
  }
`;
const ToggleCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.textColor};
  @media ${(props) => props.theme.windowSize.mobile} {
    width: 8px;
    height: 8px;
  }
`;

export default function Header({ isDarkMode, setIsDarkMode }: DarkModeProps) {
  const currentPath = useLocation().pathname;
  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Projects",
      link: "/projects",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <Base>
      <Logo viewBox="0 0 64 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.4239 14.2907L28.2557 10.177L41.1428 3.73999V11.9336L36.4239 14.2907Z" />
        <path d="M6.7135 29.1308V20.9371L19.9637 14.3187V22.5124L6.7135 29.1308Z" />
        <path d="M29.3313 40.5103V32.3166L63.7606 15.1194V23.3131L29.3313 40.5103Z" />
        <path d="M20.5543 22.5132V14.3205L36.223 22.2039L28.0653 26.2922L20.5543 22.5132Z" />
        <path d="M0.717285 26.4093V18.2166L6.12343 20.9366V29.1293L0.717285 26.4093Z" />
        <path d="M23.3351 37.7889V29.5962L28.7413 32.3162V40.5089L23.3351 37.7889Z" />
        <path d="M44.2189 18.8031L58.0594 11.8899L63.5285 14.6416L29.037 31.8698L23.5678 29.1182L37.4083 22.205L20.2595 13.577L6.41907 20.4902L0.949951 17.7385L35.4415 0.510254L40.9106 3.26191L27.0702 10.1751L44.2189 18.8031Z" />
        <path d="M6.71338 29.1308V20.9371L19.9636 14.3187V22.5124L6.71338 29.1308Z" />
        <path d="M20.5544 22.5132V14.3205L36.2231 22.2039L28.0654 26.2922L20.5544 22.5132Z" />
        <path d="M23.3352 37.7889V29.5962L28.7413 32.3162V40.5089L23.3352 37.7889Z" />
      </Logo>
      <Nav>
        {navItems.map((item) => (
          <NavItem
            to={item.link}
            id={item.link}
            key={item.id}
            currentPath={currentPath}
          >
            {item.name}
          </NavItem>
        ))}
      </Nav>
      <ModeToggleWrapper>
        <ModeIcon
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          opacity={isDarkMode ? 0.3 : 1}
        >
          <path d="M15.0657 18.5604C16.9957 18.5604 18.5602 16.9959 18.5602 15.0659C18.5602 13.136 16.9957 11.5714 15.0657 11.5714C13.1357 11.5714 11.5712 13.136 11.5712 15.0659C11.5712 16.9959 13.1357 18.5604 15.0657 18.5604ZM15.0657 19.4176C17.469 19.4176 19.4173 17.4693 19.4173 15.0659C19.4173 12.6626 17.469 10.7143 15.0657 10.7143C12.6623 10.7143 10.7141 12.6626 10.7141 15.0659C10.7141 17.4693 12.6623 19.4176 15.0657 19.4176Z" />
          <path d="M14.9998 8.14286L14.9998 3L15.8569 3L15.8569 8.14286L14.9998 8.14286Z" />
          <path d="M14.1426 27L14.1426 21.8571L14.9998 21.8571L14.9998 27L14.1426 27Z" />
          <path d="M10.151 19.8487L6.51448 23.4853L5.90839 22.8792L9.54493 19.2426L10.151 19.8487Z" />
          <path d="M24.0911 7.12082L20.4546 10.7574L19.8485 10.1513L23.485 6.51473L24.0911 7.12082Z" />
          <path d="M10.151 10.1513L6.51448 6.51472L7.12057 5.90863L10.7571 9.54518L10.151 10.1513Z" />
          <path d="M22.8789 24.0914L19.2424 20.4548L19.8485 19.8487L23.485 23.4853L22.8789 24.0914Z" />
          <path d="M21.8569 15L26.9998 15L26.9998 15.8571L21.8569 15.8571L21.8569 15Z" />
          <path d="M2.99975 14.1429L8.14261 14.1429L8.14261 15L2.99975 15L2.99975 14.1429Z" />
        </ModeIcon>
        <ToggleBtn
          isDarkMode={isDarkMode}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          <ToggleCircle />
        </ToggleBtn>
        <ModeIcon
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          opacity={isDarkMode ? 1 : 0.3}
        >
          <path d="M6.99229 22.0854C6.63405 21.7312 6.30222 21.3503 6 20.9459C6.46917 21.0342 6.9498 21.0901 7.43948 21.111C7.58467 21.1172 7.73066 21.1203 7.87737 21.1203C13.4484 21.1203 17.9646 16.6041 17.9646 11.0331C17.9646 9.2905 17.5227 7.6511 16.7449 6.22084C16.5129 5.79436 16.2511 5.38648 15.9623 5C16.4634 5.09433 16.9515 5.22574 17.4236 5.39126C21.3538 6.7693 24.1721 10.5119 24.1721 14.9128C24.1721 20.4838 19.6559 25 14.0849 25C11.3197 25 8.81446 23.8874 6.99229 22.0854ZM18.1127 6.76448C18.6614 8.07874 18.9646 9.52106 18.9646 11.0331C18.9646 16.9389 14.3471 21.7661 8.52542 22.1017C10.0626 23.2924 11.991 24 14.0849 24C19.1036 24 23.1721 19.9315 23.1721 14.9128C23.1721 11.3411 21.1108 8.24941 18.1127 6.76448Z" />
        </ModeIcon>
      </ModeToggleWrapper>
    </Base>
  );
}
