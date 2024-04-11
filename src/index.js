import React from "react";
import { render } from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes.json";
import colorData from "./data/color-data.json";

render(<Menu recipes={{data, colorData}} />, document.getElementById("root"));