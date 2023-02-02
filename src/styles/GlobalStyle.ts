import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    *::-webkit-scrollbar {
            width: 8px;
            height: 8px;
    }
    *::-webkit-scrollbar-track {
            border-radius: 10px;
            border: ${(props) => props.theme.color.borderColor}50;
    }
    *::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.color.textColor}50;
            border-radius: 10px;
    }
    html {
        font-size: 16px;
        font-family: 'Pretendard';
        overflow: hidden;
        @media ${(props) => props.theme.windowSize.desktop} {
            font-size: 15px;
        }
        @media ${(props) => props.theme.windowSize.laptop} {
            font-size: 14px;
        }
        @media ${(props) => props.theme.windowSize.tablet} {
            font-size: 13px;
        }
        @media ${(props) => props.theme.windowSize.mobile} {
            font-size: 12px;
        }
    }
    body {
        transition: background-color 0.5s ease-in-out, color 1s ease-in-out;
        background-color: ${(props) => props.theme.color.bgColor};
        color: ${(props) => props.theme.color.textColor};
    }
    textarea {
        resize: none;
        padding: 0;
        outline: none;
        font-family: 'Pretendard';
    }
    input {
        padding: 0;
        outline: none;
        font-family: 'Pretendard';
    }
    button {
        color: ${(props) => props.theme.color.textColor};
        border: ${(props) => props.theme.color.borderColor};
        background-color: transparent;
        font-family: 'Pretendard';
        font-weight: 600;
        font-size: ${(props) => props.theme.fontSize.base};
        cursor: pointer;
        border-radius: 2rem;
        padding: 0.2rem 1rem;
        transition: all 0.3s ease-in-out;
    }
    img {
        image-rendering: -webkit-optimize-contrast;
        backface-visibility: hidden;
        transform: translateZ(0);
    }

    @media (hover: hover) {
        button:hover {
            background-color: ${(props) => props.theme.color.textColor}10;
        } 
    }

    .transition-group {
    position: relative;
    }

    .fade-enter {
    opacity: 0;
    }

    .fade-enter-active {
    opacity: 1;
    transition: all 1s ease-in-out;
    }

    .fade-exit {
    opacity: 1;
    }

    .fade-exit-active {
    opacity: 0;
    transition: all 1s ease-in-out;
    }
    .swiper-pagination-bullet{
        background-color: transparent;
        border: ${(props) => props.theme.color.borderColor};
        opacity: 1;
        transition: all 0.2s ease-in-out;

        @media (hover: hover) {
            &:hover{
                background-color: ${(props) => props.theme.color.textColor}10;
            }
        }
    }
    .swiper-pagination-bullet-active{
        background-color: ${(props) => props.theme.color.textColor};
        width: 1.5rem;
        border-radius: 5px;
        @media (hover: hover) {
            &:hover{
                background-color: ${(props) => props.theme.color.textColor};
                opacity: 0.5;
            }
        }
    }
`;
