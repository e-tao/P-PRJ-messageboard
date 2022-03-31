
import React, { useState, useEffect} from 'react';
import { Box, Button, TextField} from "@mui/material";


const MessageInput = () => {
    
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
            }
            // console.log(data);
        }
        postMessage();

    }, [updateMsg])

    const inputHandler = (ev) => {
        setInputValue(ev.target.value);
    }

    const submitHandler = (ev) => {
        ev.preventDefault();
        setUpdateMsg(inputValue)
        if (inputValue !== "") {
            window.location.reload();
        }
        

    // console.log(setUpdateMsg);
    }

    return (
        <form onSubmit={submitHandler} >
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-around", alignContent:"center"}}>
                <TextField sx={{ m:'10pt'}} variant="outlined" label="Required" onInput={inputHandler}></TextField>
                <Button variant='outlined' type='Submit'>Submit</Button>
            </Box>
        </form>)


}


export default MessageInput;