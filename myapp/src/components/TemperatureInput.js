import React from "react";

const scales = {
  c: "Celcius",
  f: "Fahrenheit",
};

export default function Calculator({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>Write Temperature in {scales[scale]}:</legend>
      <input
        type="text"
        value={temperature}
        onChange={onTemperatureChange.bind(this, scale)}
      />
    </fieldset>
  );
}
