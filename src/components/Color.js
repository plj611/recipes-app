import React, {useContext} from "react";
import { FaTrash } from "react-icons/fa";
import StarRating2 from "./StarRating2";
import { colorListContext } from "./Menu";

//export default function Color({ id, title, color, rating, onRemove = f=>f, onRateColor = f=>f}) {
export default function Color({ id, title, color, rating}) {
    const {onRemoveColor } = useContext(colorListContext);
    return (
    <section>
        <h1>{title}</h1>
        {/*
        <button onClick={() => onRemove(id)}>
            <FaTrash />
        </button>
    */}
        <button onClick={() => onRemoveColor(id)}>
            <FaTrash />
        </button>
        <div style={{ height: 50, backgroundColor: color }} />
        {/*
        <StarRating2 selectedStars={rating} onRate={i => { console.log(`Inside Color.js: ID = ${id} and Rating = ${i}`); 
                                                            onRateColor(i, id) }} />
    */}
    </section>
    );
}