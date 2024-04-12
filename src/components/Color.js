import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating2 from "./StarRating2";

export default function Color({ title, color, rating }) {
    return (
    <section>
        <h1>{title}</h1>
        <button>
            <FaTrash />
        </button>
        <div style={{ height: 50, backgroundColor: color }} />
        <StarRating2 selectedStars={rating} />
    </section>
    );
}