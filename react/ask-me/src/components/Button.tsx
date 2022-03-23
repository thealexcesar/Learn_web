// type ButtonProps = { 
    // text?: string;
// }

import { useState } from "react";

// export function Button(props: ButtonProps) {
    // return (
        // <button>{props.text || 'Default'}</button>
    // )
// }

export function Button() {
    // let counter = 0;
    const [counter, setCounter] = useState(0) //Transform to STATE

    function increment() {
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}