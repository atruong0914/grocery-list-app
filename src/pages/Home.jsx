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

        // check if existing item matches new item input, ignore Case
        const duplicate = items.some(
            (item) => item.toLowerCase() === newItem.toLowerCase()
        );

        // if the item is duplicate, give error
        if (duplicate) {
            setError("That item is already on your list!");
            return;
        };

        // add new items to the list
        // spread ...items operator copies all existing items -> new arr -> new item at the end
        setItems([...items, newItem]);
        // clear the item input field
        setItemInput("");
        // clear prev error message 
        setError("");
}
    // filter through the items
    // if the item doesnt match the items deleted
    // filter returns a new arr with items not deleted
    function deleteItem(itemDelete) {
        setItems(items.filter((item) => item != itemDelete));
    }