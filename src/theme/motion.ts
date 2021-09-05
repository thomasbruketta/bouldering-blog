interface ITimingNumbers {
  slow: number;
  normal: number;
  fast: number;
  veryFast: number;
}

interface ITiming {
  slow: string;
  normal: string;
  fast: string;
  veryFast: string;
}

interface IEasing {
  ease: string;
  easeOut: string;
  easeIn: string;
  linear: string;
}

export interface IMotion {
  timingNumbers: ITimingNumbers;
  timing: ITiming;
  easing: IEasing;
}

const timingNumbers = {
  slow: 800,
  normal: 400,
  fast: 200,
  veryFast: 125,
};

const timing = {
  slow: `${timingNumbers.slow}ms`,
  normal: `${timingNumbers.normal}ms`,
  fast: `${timingNumbers.fast}ms`,
  veryFast: `${timingNumbers.veryFast}ms`,
};

const easing = {
  ease: "ease",
  easeIn: "easeIn",
  easeOut: "easeOut",
  linear: "linear",
};

export const motion: IMotion = {
  timingNumbers: timingNumbers,
  timing: timing,
  easing: easing,
};
