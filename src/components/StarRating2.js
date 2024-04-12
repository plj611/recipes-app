import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
    );
const createArray = length => [...Array(length)];

export default function StarRating2({ totalStars = 5, selectedStars = 0 }) {
    return (
    <>
        {createArray(totalStars).map((n, i) => (
            <Star key={i} selected={selectedStars > i} />
        ))}
        <p>
            {selectedStars} of {totalStars} stars
        </p>
    </>
    );
}