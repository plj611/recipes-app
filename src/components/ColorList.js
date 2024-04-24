import React from "react";
import Color from "./Color";

export default function ColorList({ colors = [], onRemoveColor = f=>f, onRateColorList = f=>f }) {
    if(!colors.length) 
        return <div>No Colors Listed.</div>;
    return (
        <div>
        {
            colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor} 
                                        onRateColor={(i, id) => {onRateColorList(i, id); 
                                                                        console.log(`Inside ColorList.js I: ${i} ID: ${id}`)}}/>)
        }
        </div>
    );
}