import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import StarRating from "./StarRating";

function Recipe({ name, ingredients, steps }) {
return (
<section id={name.toLowerCase().replace(/ /g, "-")}>
<Instructions title={name} steps={steps} />
<IngredientsList list={ingredients} />
<StarRating totalStars={5} />
</section>
);
};

export default Recipe;