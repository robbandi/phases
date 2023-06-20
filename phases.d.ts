declare module 'phases' {
    // Import necessary modules
    // import { MathType } from 'mathjs';
  
    // Define Phases object
    export const Phases: {
      // Function to apply sine wave effect to a div
      sineWave: (div: HTMLDivElement, amplitude: number, frequency: number, phaseShift: number) => void;
  
      // Function to apply cosine wave effect to a div
      cosineWave: (div: HTMLDivElement, amplitude: number, frequency: number, phaseShift: number) => void;
  
      // Function to apply linear function effect to a div
      linearFunction: (div: HTMLDivElement, m: number, b: number) => void;
  
      // Function to apply quadratic function effect to a div
      quadraticFunction: (div: HTMLDivElement, a: number, b: number, c: number) => void;
  
      // Function to apply cubic function effect to a div
      cubicFunction: (div: HTMLDivElement, a: number, b: number, c: number, d: number) => void;
  
      // Function to apply quadratic Bézier curve effect to a div
      quadraticBezierCurve: (div: HTMLDivElement, p0: number, p1: number, p2: number) => void;
  
      // Function to apply cubic Bézier curve effect to a div
      cubicBezierCurve: (div: HTMLDivElement, p0: number, p1: number, p2: number, p3: number) => void;
  
      // Function to apply circle function effect to a div
      circleFunction: (div: HTMLDivElement, h: number, k: number, r: number) => void;
  
      // Function to apply Gaussian function effect to a div
      gaussianFunction: (div: HTMLDivElement, amplitude: number, mean: number, standardDeviation: number) => void;
  
      // Function to apply piecewise functions effect to a div
      piecewiseFunctions: (div: HTMLDivElement, conditions: { start: number, end: number, equation: (x: number) => number }[]) => void;
  
      // Function to apply parametric equations effect to a div
      parametricEquations: (div: HTMLDivElement, equations: { x: (t: number) => number, y: (t: number) => number }) => void;
  
      // Function to apply ellipse function effect to a div
      ellipseFunction: (div: HTMLDivElement, h: number, k: number, a: number, b: number) => void;
  
      // Function to apply hyperbola function effect to a div
      hyperbolaFunction: (div: HTMLDivElement, h: number, k: number, a: number, b: number) => void;
  
      // Function to apply exponential function effect to a div
      exponentialFunction: (div: HTMLDivElement, a: number, b: number) => void;
  
      // Function to apply tangent wave effect to a div
      tangentWave: (div: HTMLDivElement, amplitude: number, frequency: number, phaseShift: number) => void;
    };
  }
  