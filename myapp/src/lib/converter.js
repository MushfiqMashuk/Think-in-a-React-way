export function celToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function fahrenToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function converter(temperature, convertFunction) {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return "";
  }

  const output = convertFunction(input);

  return (Math.round(output * 1000) / 1000).toString(); // 1000 because I want to keep 3 digits after point.
}
