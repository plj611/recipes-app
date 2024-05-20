import React from "react";
import { render } from "react-dom";
import { ColorListContextProvider } from "./components/ColorListContextProvider";
import Menu from "./components/Menu";
render(<ColorListContextProvider><Menu /></ColorListContextProvider>, document.getElementById("root"));