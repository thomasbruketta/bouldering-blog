export interface IColors {
  white: string;
  black: string;
  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}

// Color help from smart-swatch.netlify.app
export const colors: IColors = {
  white: "#ffffff",
  black: "#222222",
  gray: {
    50: "#ecf5fb",
    100: "#d0d8e2",
    200: "#b1bccb",
    300: "#93a1b7",
    400: "#7484a2",
    500: "#5a6a88",
    600: "#46516b",
    700: "#32394d",
    800: "#1d222f",
    900: "#090c15",
  },
};
