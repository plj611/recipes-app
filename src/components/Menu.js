import React from "react";
import Recipe from "./Recipe";
import { useState } from "react";
import ColorList from "./ColorList";
// import { CgColorPicker } from "react-icons/cg";
import AddColorForm from "./AddColorForm";

function Menu({recipes}) {
    const [colors, setColors] = useState(recipes.colorData);
    return (
        <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            {recipes.data.map((recipe, i) => (<Recipe key={i} {...recipe} />))}
        </div>

        <div>
            <ColorList colors={colors} onRemoveColor={(id) => {const newColor = colors.filter(color => color.id !== id);
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
                                                                    }}/>
        </div>

        <AddColorForm onNewColor={(title, color) => {console.log(title); console.log(color)}}/>
        </article>
    );
}
export default Menu;