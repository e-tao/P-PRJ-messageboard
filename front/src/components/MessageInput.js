
import React, { useState, useEffect} from 'react';
import { Box, Button, TextField} from "@mui/material";
import { textAlign } from '@mui/system';


const MessageInput = (props) => {
    
    const [inputValue, setInputValue] = useState("");
    const [updateMsg, setUpdateMsg] = useState("");

    useEffect(() => {
        
        async function postMessage() {
            if (updateMsg !== "") {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        postContent: updateMsg,
                        addBy: 'ethan'
                    })
                };
            
                const response = await fetch('http://localhost:8000/post/', requestOptions);
                const data = await response.json();
                console.log(data);
            }
            
        }
        postMessage();

    }, [updateMsg])

    const inputHandler = (ev) => {
        setInputValue(ev.target.value);
    }

    const submitHandler = (ev) => {
        ev.preventDefault();
        setUpdateMsg(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={submitHandler} >
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"self-end"}}>
                <TextField sx={{width:800}} margin="normal" variant="outlined" placeholder='What do you want to say?' value={inputValue} onInput={inputHandler}></TextField>
                <Button sx={{width:100}} variant='outlined' type='Submit'>Submit</Button>
            </Box>
        </form>)


}


export default MessageInput;