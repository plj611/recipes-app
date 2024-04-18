import React from "react";
import Recipe from "./Recipe";
import { useState } from "react";
import ColorList from "./ColorList";

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
                                        onRateColorList={(i, rating) => console.log(`Inside Menu Rating: ${rating} I: ${i}`)}/>
        </div>
        </article>
    );
}
export default Menu;