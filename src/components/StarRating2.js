import { useContext } from "react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { colorListContext } from "./Menu";

const Star = ({ selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
    );
const createArray = length => [...Array(length)];

const { onRateColorList } = useContext(colorListContext);

export default function StarRating2({ id = id, totalStars = 5, selectedStars = 0, onRate = f => f}) {
    
    return (
    <>
        {createArray(totalStars).map((n, i) => (
            // <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i+1)}/>
            <Star key={i} selected={selectedStars > i} onSelect={() => onRateColorList(id, i+1)}/>
        ))}
        <p>
            {selectedStars} of {totalStars} stars
        </p>
    </>
    );
}