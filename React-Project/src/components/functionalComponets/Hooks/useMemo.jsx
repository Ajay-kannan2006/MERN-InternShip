import { useMemo, useState } from "react";

var slowFunction = (num) => {
    for (let slow = 0; slow < 100000000; slow++) { }
    return num * 2;
}

const UseMemo = () => {
    var [num, setNum] = useState(0);
    var [dark, setDark] = useState(false);
    const styling = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    }
    var doubleNumber = useMemo(() => {
        return slowFunction(num);
    }, [num])
    return (
        <div className="" style={styling}>
            <h2>This page is for useMemo Hook.</h2>
            <input type="number" value={num} onChange={(e) => { setNum(e.target.value) }} />
            <button onClick={() => { setDark(curTheme => !curTheme) }}>Toggle Theme</button>
            <h4 >The number is {num}</h4>
            <h4>The double number is {doubleNumber}</h4>
        </div>
    );
}

export default UseMemo;