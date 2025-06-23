import React, { useRef } from "react";

function InputFocus() {
    const inputRef = useRef(null);
    console.log(inputRef);
    
    const handleClick = () => {
        inputRef.current.focus(); // Directly focuses the input element
        inputRef.current.style.backgroundColor = "white"    };

    return (
        <div class='h-30 w-100 m-3'>
        <input ref={inputRef} type="text" placeholder="Click the button to focus me" class='border p-1 m-2 w-55' />
        <button onClick={handleClick} class='bg-amber-200 border rounded-md p-1'>Focus the input</button>
        </div>
    );
    }

export default InputFocus;

//      useRef: useRef is a React Hook that gives you access to a mutable reference that persists across re-renders. It’s commonly used for:
//  1. Accessing DOM elements directly (like document.getElementById)
//  2. Storing values that should not trigger re-renders when updated (like a timer ID, previous props, or state)

// syntax:
// const myRef = useRef(initialValue);

// initialValue: the value you want the ref to start with.
// myRef.current: the actual mutable value stored in the ref.

// Learn more from the documentations..