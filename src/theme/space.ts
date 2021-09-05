export type TSpaceSize = 0 | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128;

export interface IGetSpace {
  (int: TSpaceSize): string;
}

const BASE_SIZE = 4;

// return a number with the space size (useful for javascript calculations based on size)
export function getSpaceSize(int: TSpaceSize): number {
  return int * BASE_SIZE;
}

// returns a string with the pixel value
export function getSpace(int: TSpaceSize): string {
  return `${getSpaceSize(int)}px`;
}
