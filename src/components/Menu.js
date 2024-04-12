import React from "react";
import Recipe from "./Recipe";
import { useState } from "react";
import ColorList from "./ColorList";

function Menu({recipes}) {
    const [colors] = useState(recipes.colorData);
    return (
        <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            {recipes.data.map((recipe, i) => (<Recipe key={i} {...recipe} />))}
        </div>

        <div>
            <ColorList colors={colors} />
        </div>
        </article>
    );
}
export default Menu;