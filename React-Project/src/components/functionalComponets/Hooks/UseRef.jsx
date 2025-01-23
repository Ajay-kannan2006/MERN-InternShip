import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    var [text, setText] = useState("");
    var previousRender = useRef();
    useEffect(() => {
        console.log(text);
        previousRender.current = text;
    }, [text])
    return (
        <div className="">
            <h2>This is UseRef Example</h2>
            <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
            <h4>The text is {text} </h4>
            <h4>The previous text is {previousRender.current}</h4>
        </div>
    );
}

export default UseRef;