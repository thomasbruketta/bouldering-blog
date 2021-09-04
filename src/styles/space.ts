export type TSpaceSize =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

export interface IGetSpacing {
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
