import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

function Clicker(props) {
    const [count, setCount] = useState(0);
    const {clickCount, setClickCount} = useContext(LoginContext);

    useEffect(() => {
        return () => {
            console.log('bye')
        }
    });
 
    function counter() {
        let value = clickCount +  1;
        setCount(value)
        setClickCount(value)
        console.log(clickCount)
    }

    return (

        <div>
            <button onClick={counter}>click me!</button>
            <p>You have clicked this button {clickCount} times.</p>
        </div>
    )
}

export default Clicker