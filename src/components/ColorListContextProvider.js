import React, {useState, createContext, useContext} from "react";
import data from "../data/recipes.json";
import colorData from "../data/color-data.json";

const ColorListContext = createContext();

// export data for Menu to use
// import the data in this module
export const ColorListContextHook = () => useContext(ColorListContext);

export function ColorListContextProvider({child}) {
    const [colors, setColors] = useState(colorData);
    const onRemoveColor = (id) => {const newColor = colors.filter(color => color.id !== id);
                                                    setColors(newColor)};
    const onRateColorList = (i, id) => {console.log(`Inside Menu ID: ${id} I: ${i}`);
                                        const newColor = colors.map(color => {  if (color.id === id) {  color.rating = i;
                                                                                                        return color;
                                                                                                     }
                                                                                return color;
                                                                             })
                                        setColors(newColor)                                    
                                        }
    return (<ColorListContext.Provider value={{colors, data, onRemoveColor, onRateColorList}}> 
            {child}
            </ColorListContext.Provider>)
}