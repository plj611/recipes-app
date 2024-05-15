import React from "react";
import { render } from "react-dom";
import { ColorListContextProvider } from "./components/ColorListContextProvider";
import ColorList from "./components/ColorList"
import Menu from "./components/Menu";
//import data from "./data/recipes.json";
//import colorData from "./data/color-data.json";

//render(<Menu recipes={{data, colorData}} />, document.getElementById("root"));
render(<Menu />, document.getElementById("root"));
/*
render(
    <ColorListContextProvider>
        <ColorList />
    </ColorListContextProvider>, document.getElementById("root"));

//render(<ColorList />, document.getElementById("root")); */