import { colors, IColors } from "./colors";
import { IMotion, motion } from "./motion";
import { getSpace, IGetSpace } from "./space";

export interface ITheme {
  colors: IColors;
  getSpace: IGetSpace;
  motion: IMotion;
}

export const theme: ITheme = {
  colors: colors,
  getSpace: getSpace,
  motion: motion,
};
