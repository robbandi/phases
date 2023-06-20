declare module 'phases' {
  export const Phases: {
    sineWave: (div: HTMLDivElement, amplitude: number, frequency: number, phaseShift: number) => void;
    cosineWave: (div: HTMLDivElement, amplitude: number, frequency: number, phaseShift: number) => void;
    linearFunction: (div: HTMLDivElement, m: number, b: number) => void;
    quadraticFunction: (div: HTMLDivElement, a: number, b: number, c: number) => void;
    cubicFunction: (div: HTMLDivElement, a: number, b: number, c: number, d: number) => void;
    quadraticBezierCurve: (div: HTMLDivElement, p0: number, p1: number, p2: number) => void;
    cubicBezierCurve: (div: HTMLDivElement, p0: number, p1: number, p2: number, p3: number) => void;
    circleFunction: (div: HTMLDivElement, h: number, k: number, r: number) => void;
    gaussianFunction: (div: HTMLDivElement, amplitude: number, mean: number, standardDeviation: number) => void;
    piecewiseFunctions: (
      div: HTMLDivElement,
      conditions: { start: number; end: number; equation: (x: number) => number }[]
    ) => void;
    parametricEquations: (div: HTMLDivElement, equations: { x: (t: number) => number; y: (t: number) => number }) => void;
    ellipseFunction: (div: HTMLDivElement, h: number, k: number, a: number, b: number) => void;
    hyperbolaFunction: (div: HTMLDivElement, h: number, k: number, a: number, b: number) => void;
    exponentialFunction: (div: HTMLDivElement, a: number, b: number) => void;
    tangentWave: (div: HTMLDivElement, amplitude: number, frequency: number, phaseShift: number) => void;
  };
}
