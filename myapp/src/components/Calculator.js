import React from "react";
import BoilingVerdict from "../components/BoilingVerdict";
import { celToFahrenheit, converter, fahrenToCelsius } from "../lib/converter";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleChange = (scale, e) => {
    const target = e.target;

    this.setState({
      temperature: target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;

    const celsius =
      scale === "f" ? converter(temperature, fahrenToCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? converter(temperature, celToFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange}
        />
        <BoilingVerdict temp={parseFloat(celsius)} />
      </div>
    );
  }
}

/**
  *jodi amn situation create hoy jeikhane multiple component k akta single state afect kortese, taile individually state manage na kore akta single component theke state manage korte hobe. then state gulo child element a props hishabe pathate hobe. single source of truth. 
  
  * top-down data flow er upor rely korte hobe. 
  * shob shomoy try korte hobe state jate beshi bere na jay. state theke kono kisu derive kora gele sheta korar cheshta korte hobe.
*/
