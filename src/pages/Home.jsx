import { useState } from "react";

function Home() {
    // track user input
    const [ itemInput, setItemInput ] = useState("");
    // track items in list
    const [ items, setItems ] = useState([]);
    // error message
    const [ error, setError ] = useState("");

    // handle when a form is submitted
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault();

        // remove whitespace start & end from what user inputs
        const newItem = itemInput.trim()
    }
        // if user doesn't enter item, give error
        if (newItem === "")  {
            setError("Please enter an item.");
            return;
        };



}