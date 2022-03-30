import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { borderRadius, display, flexbox } from '@mui/system';

const MessageList = () => {
    
    const [Messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchMessage () {
            const response = await fetch('http://localhost:8000/post/');
            const responseData = await response.json();
            console.log(responseData);

            setMessages(responseData);
        }
        fetchMessage();
    }, []);

    const list = Messages.map((Message) =>
        <Box sx={{ bgcolor: '#2C7CDE', width: '300px', height:'100px', display: 'flex', flexDirection: "column", border:"1px", ml:"10px", boxShadow:"1", borderRadius:2, opacity:"0.7"}} key={Message.postId}>
            <Box sx={{fontSize:"16pt", fontWeight:"medium", ml:"5px", height:"80px", Color:'text.primary'}}>{Message.postContent}</Box>
            <Box sx={{fontSize:"10pt", textAlign:"right", mr:"5px", color:'text.secondary'}}>{Message.addBy}</Box>
            <Box sx={{fontSize:"8pt", textAlign:"right", mr:"5px", color:'text.secondary'}}>{Message.addAt}</Box>
        </Box>
    );


    return <div>
        <Paper sx={{ bgcolor: "#4C4878", width: "1000px", height: "500px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 5, mx:"auto"}}>{list}</Paper>
    </div>

}


export default MessageList