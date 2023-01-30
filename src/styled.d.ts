import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
    };
    windowSize: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
    color: {
      bgColor: string;
      textColor: string;
      borderColor: string;
    };
  }
}
