// Define Phases object
export const Phases = {
  // Function to apply sine wave effect to a div
  sineWave: (div, amplitude, frequency, phaseShift) => {
    let transformValue = '';
    // Calculate the sine wave values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const sineValue = amplitude * Math.sin((i / frequency) + phaseShift);
      // Accumulate the transform values
      transformValue += `translateY(${sineValue}px) `;
    }
    // Apply the accumulated transform value to the div
    div.style.transform = transformValue;
  },

  // Function to apply cosine wave effect to a div
  cosineWave: (div, amplitude, frequency, phaseShift) => {
    let transformValue = '';
    // Calculate the cosine wave values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const cosineValue = amplitude * Math.cos((i / frequency) + phaseShift);
      // Accumulate the transform values
      transformValue += `translateY(${cosineValue}px) `;
    }
    // Apply the accumulated transform value to the div
    div.style.transform = transformValue;
  },

    // Function to apply tangent wave effect to a div
    tangentWave: (div, amplitude, frequency, phaseShift) => {
      let transformValue = '';
      // Calculate the tangent wave values for each pixel
      for (let i = 0; i < div.offsetWidth; i++) {
        const tangentValue = amplitude * Math.tan((i / frequency) + phaseShift);
        // Accumulate the transform values
        transformValue += `translateY(${tangentValue}px) `;
      }
      // Apply the accumulated transform value to the div
      div.style.transform = transformValue;
    },

  // Function to apply linear function effect to a div
  linearFunction: (div, m, b) => {
    let transformValue = '';
    // Calculate the linear function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const linearValue = m * i + b;
      // Accumulate the transform values
      transformValue += `translateY(${linearValue}px) `;
    }
    // Apply the accumulated transform value to the div
    div.style.transform = transformValue;
  },

  // Function to apply quadratic function effect to a div
  quadraticFunction: (div, a, b, c) => {
    let transformValue = '';
    // Calculate the quadratic function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const quadraticValue = a * Math.pow(i, 2) + b * i + c;
      // Accumulate the transform values
      transformValue += `translateY(${quadraticValue}px) `;
    }
    // Apply the accumulated transform value to the div
    div.style.transform = transformValue;
  },

  // Function to apply cubic function effect to a div
  cubicFunction: (div, a, b, c, d) => {
    let transformValue = '';
    // Calculate the cubic function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const cubicValue = a * Math.pow(i, 3) + b * Math.pow(i, 2) + c * i + d;
      // Accumulate the transform values
      transformValue += `translateY(${cubicValue}px) `;
    }
    // Apply the accumulated transform value to the div
    div.style.transform = transformValue;
  },

  // Function to apply quadratic Bézier curve effect to a div
  quadraticBezierCurve: (div, p0, p1, p2) => {
    let transformValue = '';
    // Calculate the quadratic Bézier curve values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const t = i / div.offsetWidth;
      const quadraticBezierValue = Math.pow(1 - t, 2) * p0 + 2 * (1 - t) * t * p1 + Math.pow(t, 2) * p2;
      // Accumulate the transform values
      transformValue += `translateY(${quadraticBezierValue}px) `;
    }
    // Apply the accumulated transform value to the div
    div.style.transform = transformValue;
  },

  // Function to apply cubic Bézier curve effect to a div
  cubicBezierCurve: (div, p0, p1, p2, p3) => {
    let transformValue = '';
    // Calculate the cubic Bézier curve values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const t = i / div.offsetWidth;
      const cubicBezierValue = Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
      // Accumulate the transform values
      transformValue += `translateY(${cubicBezierValue}px) `;
    }
    // Apply the accumulated transform value to the div
    div.style.transform = transformValue;
  },

  // Function to apply circle function effect to a div
  circleFunction: (div, h, k, r) => {
    let transformValue = '';
    // Calculate the circle function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const circleValue = Math.sqrt(Math.pow(r, 2) - Math.pow(i - h, 2)) + k;
      // Accumulate the transform values
      transformValue += `translateY(${circleValue}px) `;
    }
    // Apply the accumulated transform value to the div
    div.style.transform = transformValue;
  },

  gaussianFunction: (div, amplitude, mean, standardDeviation) => {
    let transformValue = '';
    for (let i = 0; i < div.offsetWidth; i++) {
      const x = i - div.offsetWidth / 2;
      const gaussianValue = amplitude * Math.exp(-(Math.pow(x - mean, 2) / (2 * Math.pow(standardDeviation, 2))));
      transformValue += `translateY(${gaussianValue}px) `;
    }
    div.style.transform = transformValue;
  },

  piecewiseFunctions: (div, conditions) => {
    let transformValue = '';
    for (let i = 0; i < div.offsetWidth; i++) {
      let value;
      for (const condition of conditions) {
        if (i >= condition.start && i <= condition.end) {
          value = condition.equation(i);
          break;
        }
      }
      if (value !== undefined) {
        transformValue += `translateY(${value}px) `;
      }
    }
    div.style.transform = transformValue;
  },

  parametricEquations: (div, equations) => {
    let transformValue = '';
    for (let i = 0; i < div.offsetWidth; i++) {
      const t = i / div.offsetWidth;
      const x = equations.x(t);
      const y = equations.y(t);
      transformValue += `translate(${x}px, ${y}px) `;
    }
    div.style.transform = transformValue;
  },

  // Function to apply ellipse function effect to a div
  ellipseFunction: (div, h, k, a, b) => {
    let transformValue = '';
    // Calculate the ellipse function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const ellipseValue = b * Math.sqrt(1 - Math.pow((i - h) / a, 2)) + k;
      // Accumulate the transform values
      transformValue += `translateY(${ellipseValue}px) `;
    }
    // Apply the accumulated transform value to the div
    div.style.transform = transformValue;
  },

  // Function to apply hyperbola function effect to a div
  hyperbolaFunction: (div, h, k, a, b) => {
    let transformValue = '';
    // Calculate the hyperbola function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const hyperbolaValue = b * Math.sqrt(Math.pow((i - h) / a, 2) - 1) + k;
      // Accumulate the transform values
      transformValue += `translateY(${hyperbolaValue}px) `;
    }
    // Apply the accumulated transform value to the div
    div.style.transform = transformValue;
  },

  // Function to apply exponential function effect to a div
  exponentialFunction: (div, a, b) => {
    let transformValue = '';
    // Calculate the exponential function values for each pixel
    for (let i = 0; i < div.offsetWidth; i++) {
      const exponentialValue = a * Math.exp(b * i);
      // Accumulate the transform values
      transformValue += `translateY(${exponentialValue}px) `;
    }
    // Apply the accumulated transform value to the div
    div.style.transform = transformValue;
  },
};
