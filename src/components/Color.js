import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating2 from "./StarRating2";

export default function Color({ id, title, color, rating, onRemove = f=>f, onRateColor = f=>f}) {
    return (
    <section>
        <h1>{title}</h1>
        <button onClick={() => onRemove(id)}>
            <FaTrash />
        </button>
        <div style={{ height: 50, backgroundColor: color }} />
        <StarRating2 selectedStars={rating} onRate={i => { console.log(`Inside Color.js: Rating = ${rating} and I = ${i}`); 
                                                            onRateColor(i, rating) }} />
    </section>
    );
}