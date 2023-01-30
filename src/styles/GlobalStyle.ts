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
            width: 5px;
            height: 5px;
    }
    *::-webkit-scrollbar-track {
            background-color: ${(props) => props.theme.color.textColor}30;
            border-radius: 10px;
    }
    *::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.color.textColor}30;
            border-radius: 10px;
    }
    html {
        font-size: 16px;
        font-family: 'Pretendard';
        @media ${(props) => props.theme.windowSize.desktop} {
            font-size: 15px;
        }
    }
    body {
        transition: background-color 0.3s ease-in-out, color 0.8s ease-in-out;
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
        padding: 0.3rem 1rem;
    }
`;
