import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  color: {
    bgColor: "#FDFDFD",
    textColor: "#090909",
    borderColor: "1px solid #090909",
  },
  fontSize: {
    xs: "0.5rem",
    sm: "0.75rem",
    base: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  windowSize: {
    mobile: `screen and (max-width: 480px)`,
    tablet: `screen and (max-width: 768px)`,
    laptop: `screen and (max-width: 1024px)`,
    desktop: `screen and (max-width: 1440px)`,
  },
};

export const darkTheme: DefaultTheme = {
  color: {
    bgColor: "#090909",
    textColor: "#FDFDFD",
    borderColor: "1px solid #FDFDFD",
  },
  fontSize: {
    xs: "0.5rem",
    sm: "0.75rem",
    base: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  windowSize: {
    mobile: `screen and (max-width: 480px)`,
    tablet: `screen and (max-width: 768px)`,
    laptop: `screen and (max-width: 1024px)`,
    desktop: `screen and (max-width: 1440px)`,
  },
};
