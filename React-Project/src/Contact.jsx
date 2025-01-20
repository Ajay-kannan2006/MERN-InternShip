import { useState } from "react";

const Contact = () => {
    var [num, setNum] = useState(0);
    const handleNum = () => {
        setNum(num + 1);
        setNum(num + 1);
    }
    return (
        <div className="">
            <h2>Welcome to contact page</h2>
            <h3>This is a satte example</h3>
            <h3>{num}</h3>
            <button onClick={handleNum}>Add</button>
        </div>
    );
}

export default Contact;