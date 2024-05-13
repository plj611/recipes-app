import React, {useContext} from "react";
import Color from "./Color";
// import { colorListContext } from "./Menu";
import { ColorListContextHook } from "./ColorListContextProvider";

// export default function ColorList({ onRemoveColor = f=>f, onRateColorList = f=>f }) {
export default function ColorList() {
    //const {colors} = useContext(colorListContext);
    const {colors} = ColorListContextHook()
    if(!colors.length) 
        return <div>No Colors Listed.</div>;
    return (
        <div>
        {
            colors.map(color => <Color key={color.id} {...color} />)
            /*
            colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor} 
                                        onRateColor={(i, id) => {onRateColorList(i, id); 
                                                                       console.log(`Inside ColorList.js I: ${i} ID: ${id}`)}}/>)
                                        */
        }
        </div>
    );
}