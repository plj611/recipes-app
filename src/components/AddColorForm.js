import React, { useState } from "react";

function genericInput(v) {
        const [value, setFun] = useState(v);


        return [{value, onChange: event => setFun(event.target.value)}, setFun]
}

export default function AddColorForm({ onNewColor = f => f }) {
    const [titleProp, setTitle] = genericInput("");
    const [colorProp, setColor] = genericInput("#000000");

    const submit = e => {   e.preventDefault();
                            onNewColor(titleProp.value, colorProp.value);
                            setTitle("");
                            setColor("#FFFFFF");
                            console.log("hello world!");
                        };
        return ( <form onSubmit={submit}>
                <input {...titleProp}
                        type="text" placeholder="color title..." required />
                <input {...colorProp}
                        type="color" required />
                <button>ADD</button>
                </form> );

}
