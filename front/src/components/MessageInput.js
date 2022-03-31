
import React, { useState, useEffect } from 'react';
import { Button, TextField} from "@mui/material";


const MessageInput = () => {
    
    const [inputValue, setInputValue] = useState("");


    useEffect(() => {

        async function postMessage () {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    postContent: inputValue,
                    addBy: 'ethan'
                })
            };
            
            const response = await fetch('http://localhost:8000/post/', requestOptions);
            const data = await response.json();
            console.log(data);
        }
        postMessage();
    }, [inputValue])

    const inputHandler = (ev) => {
        setInputValue(ev.target.value);
    }

    const submitHandler = (ev) => {
        ev.preventDefault();

        // console.log(inputValue);
    }


    
    // console.log(inputValue);

    return (
        <form onSubmit={submitHandler}>
            <TextField sx={{ m:'10pt'}} variant="outlined" label="Required" onInput={inputHandler}></TextField>
            <Button  variant='outlined' type='Submit'>Submit</Button>
        </form>)


}


export default MessageInput;