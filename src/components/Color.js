import React from "react";
import StarRating2 from "./StarRating2";

export default function Color({ title, color, rating }) {
    return (
    <section>
        <h1>{title}</h1>
        <div style={{ height: 50, backgroundColor: color }} />
        <StarRating2 selectedStars={rating} />
    </section>
    );
}