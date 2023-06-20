# Phases

Phases is a powerful NPM package designed to empower developers with the ability to create captivating visual effects and dynamic transformations using trigonometric functions. With phases, you can easily incorporate sine, cosine, tangent, and other mathematical formulas associated with structures and shapes into your HTML elements, providing a unique and visually appealing user experience.

## Features

- **Simplified API:** phases offers a simple and intuitive API, making it effortless to integrate trigonometry-based transformations into your projects.
- **Div Wave Effects:** Transform your divs into mesmerizing wave patterns by applying the sine function. Adjust the wave amplitude using customizable parameters to achieve the desired visual effect.
- **Mathematical Formulas:** Access a wide range of mathematical formulas associated with structure and shape manipulation, enabling you to create complex animations and designs with ease.
- **Cross-browser Compatibility:** phases ensures seamless compatibility across major web browsers, allowing your creations to be enjoyed by users on different platforms.

## Installation

To install phases, simply run the following command:

```
npm install phases
```

## Usage

To use phases, first import the module:

```javascript
const Phases = require('phases');
```

Then, you can apply the sine, cosine, or tangent wave effect to a div by calling the corresponding function:

```javascript
// Apply sine wave effect to a div
Phases.sineWave(div, amplitude, frequency, phaseShift);

// Apply cosine wave effect to a div
Phases.cosineWave(div, amplitude, frequency, phaseShift);

// Apply tangent wave effect to a div
Phases.tangentWave(div, amplitude, frequency, phaseShift);

// Apply linear function to a div
Phases.linearFunction(div, m, b);

// Apply quadratic function to a div
Phases.quadraticFunction(div, a, b, c);

// Apply cubic function to a div
Phases.cubicFunction(div, a, b, c, d);

// Apply quadratic bezier curve to a div
Phases.quadraticBezierCurve(div, p0, p1, p2);

// Apply cubic bezier curve to a div
Phases.cubicBezierCurve(div, p0, p1, p2, p3);

// Apply circle function to a div
Phases.circleFunction(div, h, k, r);

// Apply gaussian function to a div
Phases.gaussianFunction(div, amplitude, mean, standardDeviation);

// Apply piecewise functions to a div
Phases.piecewiseFunctions(div, conditions);

// Apply parametric equations to a div
Phases.parametricEquations(div, equations);

// Apply ellipse function to a div
Phases.ellipseFunction(div, h, k, a, b);

// Apply hyperbola function to a div
Phases.hyperbolaFunction(div, h, k, a, b);

// Apply exponential function to a div
Phases.exponentialFunction(div, a, b);
```

## API

### `sineWave(div, amplitude, frequency, phaseShift)`

Applies the sine wave effect to a div.

- `div` - The div element to apply the effect to.
- `amplitude` - The amplitude of the wave.
- `frequency` - The frequency of the wave.
- `phaseShift` - The phase shift of the wave.

### `cosineWave(div, amplitude, frequency, phaseShift)`

Applies the cosine wave effect to a div.

- `div` - The div element to apply the effect to.
- `amplitude` - The amplitude of the wave.
- `frequency` - The frequency of the wave.
- `phaseShift` - The phase shift of the wave.

### `tangentWave(div, amplitude, frequency, phaseShift)`

Applies the tangent wave effect to a div.

- `div` - The div element to apply the effect to.
- `amplitude` - The amplitude of the wave.
- `frequency` - The frequency of the wave.
- `phaseShift` - The phase shift of the wave.

### `linearFunction(div, m, b)`

Applies the linear function to a div.

- `div` - The div element to apply the effect to.
- `m` - The slope of the line.
- `b` - The y-intercept of the line.

### `quadraticFunction(div, a, b, c)`

Applies the quadratic function to a div.

- `div` - The div element to apply the effect to.
- `a` - The coefficient of the quadratic term.
- `b` - The coefficient of the linear term.
- `c` - The constant term.

### `cubicFunction(div, a, b, c, d)`

Applies the cubic function to a div.

- `div` - The div element to apply the effect to.
- `a` - The coefficient of the cubic term.
- `b` - The coefficient of the quadratic term.
- `c` - The coefficient of the linear term.
- `d` - The constant term.

### `quadraticBezierCurve(div, p0, p1, p2)`

Applies the quadratic bezier curve to a div.

- `div` - The div element to apply the effect to.
- `p0` - The starting point of the curve.
- `p1` - The control point of the curve.
- `p2` - The ending point of the curve.

### `cubicBezierCurve(div, p0, p1, p2, p3)`

Applies the cubic bezier curve to a div.

- `div` - The div element to apply the effect to.
- `p0` - The starting point of the curve.
- `p1` - The first control point of the curve.
- `p2` - The second control point of the curve.
- `p3` - The ending point of the curve.

### `circleFunction(div, h, k, r)`

Applies the circle function to a div.

- `div` - The div element to apply the effect to.
- `h` - The x-coordinate of the center of the circle.
- `k` - The y-coordinate of the center of the circle.
- `r` - The radius of the circle.

### `gaussianFunction(div, amplitude, mean, standardDeviation)`

Applies the gaussian function to a div.

- `div` - The div element to apply the effect to.
- `amplitude` - The amplitude of the curve.
- `mean` - The mean of the curve.
- `standardDeviation` - The standard deviation of the curve.

### `piecewiseFunctions(div, conditions)`

Applies the piecewise functions to a div.

- `div` - The div element to apply the effect to.
- `

## License

Phases is licensed under the [MIT License](https://opensource.org/licenses/MIT).
