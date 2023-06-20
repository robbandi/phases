// Define Phases object
export const Phases = {
  // Function to apply sine wave effect to a div
  sineWave: (div, amplitude, frequency, phaseShift) => {
    // Calculate the sine wave values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const sineValue = amplitude * Math.sin((i / frequency) + phaseShift);
      // Apply the sine wave effect to the div
      div.style.transform += `translateY(${sineValue}px)`;
    }
  },

  // Function to apply cosine wave effect to a div
  cosineWave: (div, amplitude, frequency, phaseShift) => {
    // Calculate the cosine wave values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const cosineValue = amplitude * Math.cos((i / frequency) + phaseShift);
      // Apply the cosine wave effect to the div
      div.style.transform += `translateY(${cosineValue}px)`;
    }
  },

  linearFunction: (div, m, b) => {
    // Calculate the linear function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const linearValue = m * i + b;
      // Apply the linear function effect to the div
      div.style.transform += `translateY(${linearValue}px)`;
    }
  },

  // Function to apply quadratic function effect to a div
  quadraticFunction: (div, a, b, c) => {
    // Calculate the quadratic function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const quadraticValue = a * Math.pow(i, 2) + b * i + c;
      // Apply the quadratic function effect to the div
      div.style.transform += `translateY(${quadraticValue}px)`;
    }
  },

  // Function to apply cubic function effect to a div
  cubicFunction: (div, a, b, c, d) => {
    // Calculate the cubic function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const cubicValue = a * Math.pow(i, 3) + b * Math.pow(i, 2) + c * i + d;
      // Apply the cubic function effect to the div
      div.style.transform += `translateY(${cubicValue}px)`;
    }
  },

  // Function to apply quadratic Bézier curve effect to a div
  quadraticBezierCurve: (div, p0, p1, p2) => {
    // Calculate the quadratic Bézier curve values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const t = i / div.offsetWidth;
      const quadraticBezierValue = Math.pow(1 - t, 2) * p0 + 2 * (1 - t) * t * p1 + Math.pow(t, 2) * p2;
      // Apply the quadratic Bézier curve effect to the div
      div.style.transform += `translateY(${quadraticBezierValue}px)`;
    }
  },

  // Function to apply cubic Bézier curve effect to a div
  cubicBezierCurve: (div, p0, p1, p2, p3) => {
    // Calculate the cubic Bézier curve values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const t = i / div.offsetWidth;
      const cubicBezierValue = Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
      // Apply the cubic Bézier curve effect to the div
      div.style.transform += `translateY(${cubicBezierValue}px)`;
    }
  },

  // Function to apply circle function effect to a div
  circleFunction: (div, h, k, r) => {
    // Calculate the circle function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const circleValue = Math.sqrt(Math.pow(r, 2) - Math.pow(i - h, 2)) + k;
      // Apply the circle function effect to the div
      div.style.transform += `translateY(${circleValue}px)`;
    }
  },

  gaussianFunction: (div, amplitude, mean, standardDeviation) => {
    for (let i = 0; i < div.offsetWidth; i++) {
      const x = i - div.offsetWidth / 2;
      const gaussianValue = amplitude * Math.exp(-(Math.pow(x - mean, 2) / (2 * Math.pow(standardDeviation, 2))));
      div.style.transform += `translateY(${gaussianValue}px)`;
    }
  },

  piecewiseFunctions: (div, conditions) => {
    for (let i = 0; i < div.offsetWidth; i++) {
      let value;
      for (const condition of conditions) {
        if (i >= condition.start && i <= condition.end) {
          value = condition.equation(i);
          break;
        }
      }
      if (value !== undefined) {
        div.style.transform += `translateY(${value}px)`;
      }
    }
  },

  parametricEquations: (div, equations) => {
    for (let i = 0; i < div.offsetWidth; i++) {
      const t = i / div.offsetWidth;
      const x = equations.x(t);
      const y = equations.y(t);
      div.style.transform += `translate(${x}px, ${y}px)`;
    }
  },

  // Function to apply ellipse function effect to a div
  ellipseFunction: (div, h, k, a, b) => {
    // Calculate the ellipse function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const ellipseValue = b * Math.sqrt(1 - Math.pow((i - h) / a, 2)) + k;
      // Apply the ellipse function effect to the div
      div.style.transform += `translateY(${ellipseValue}px)`;
    }
  },

  // Function to apply hyperbola function effect to a div
  hyperbolaFunction: (div, h, k, a, b) => {
    // Calculate the hyperbola function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const hyperbolaValue = b * Math.sqrt(Math.pow((i - h) / a, 2) - 1) + k;
      // Apply the hyperbola function effect to the div
      div.style.transform += `translateY(${hyperbolaValue}px)`;
    }
  },

  // Function to apply exponential function effect to a div
  exponentialFunction: (div, a, b) => {
    // Calculate the exponential function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const exponentialValue = a * Math.exp(b * i);
      // Apply the exponential function effect to the div
      div.style.transform += `translateY(${exponentialValue}px)`;
    }
  },

  // Function to apply tangent wave effect to a div
  tangentWave: (div, amplitude, frequency, phaseShift) => {
    // Calculate the tangent wave values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const tangentValue = amplitude * Math.tan((i / frequency) + phaseShift);
      // Apply the tangent wave effect to the div
      div.style.transform += `translateY(${tangentValue}px)`;
    }
  }
};