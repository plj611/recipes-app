import React, {createContext} from "react";
import Recipe from "./Recipe";
import { useState } from "react";
import ColorList from "./ColorList";
// import { CgColorPicker } from "react-icons/cg";
import AddColorForm from "./AddColorForm";
import { v4 } from "uuid";
import Color from "./Color";

export const colorListContext = createContext()

function Menu({recipes}) {
    const [colors, setColors] = useState(recipes.colorData);
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
        
                                
    return (
        <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            {recipes.data.map((recipe, i) => (<Recipe key={i} {...recipe} />))}
        </div>

        <div>

        <colorListContext.Provider value={{colors, onRemoveColor, onRateColorList}} >
             {
              /* <ColorList onRemoveColor={(id) => {const newColor = colors.filter(color => color.id !== id);
                                                                setColors(newColor)}} 
              
            
                            onRateColorList={(i, id) => {   console.log(`Inside Menu ID: ${id} I: ${i}`);
                                                                        const newColor = colors.map(color =>    {  if (color.id === id) {
                                                                                                                        color.rating = i;
                                                                                                                        return color;
                                                                                                                    }
                                                                                                                    return color;
                                                                                                                }
                                                                                                    )
                                                                        setColors(newColor)
                                                                    }}/> */ }
                <ColorList />
        </colorListContext.Provider>
        </div>

        <AddColorForm onNewColor={(title, color) => {console.log(title); console.log(color); console.log('234');
                                                    const newColor = [
                                                     ...colors,
                                                     {
                                                        id: v4(),
                                                        rating: 0,
                                                        title,
                                                        color
                                                     }
                                                    ]; 
                                                    console.log(newColor);
                                                    setColors(newColor);
                                                }}/> 
        </article>
    );
}
export default Menu;