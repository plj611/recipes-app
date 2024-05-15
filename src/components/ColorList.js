import React, {useContext} from "react";
// import Color from "./Color";
// import { colorListContext } from "./Menu";
import { ColorListContextHook } from "./ColorListContextProvider";

// export default function ColorList({ onRemoveColor = f=>f, onRateColorList = f=>f }) {
export default function ColorList() {
    /*
    //const {colors} = useContext(colorListContext);
    const {colors, abc} = ColorListContextHook();
     const a = 1 / 0;

    if(!colors.length) 
        return <div>No Colors Listed.</div>;
    return (
        <div>Hello
        {
            /*
            colors.map(color => <Color key={color.id} {...color} />)
            /*
            colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor} 
                                        onRateColor={(i, id) => {onRateColorList(i, id); 
                                                                       console.log(`Inside ColorList.js I: ${i} ID: ${id}`)}}/>)
                                        
        }
        </div>
    );
    */
   return (<div>Hello World again!</div>)
}