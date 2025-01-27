import { useEffect, useState } from "react"

const useLocalStorage = (key, value) => {
    var [text, setText] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if (!jsonValue) return jsonValue;
    });
    useEffect(() => { }, [key, value]);
    return [text, setText];
    // const jsonValue = localStorage.getItem(key);

}