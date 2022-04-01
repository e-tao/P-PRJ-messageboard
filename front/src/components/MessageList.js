import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';


const MessageList = (props) => {
    
    const [Messages, setMessages] = useState([]);
    

    useEffect(() => {
        async function fetchMessage () {
            const response = await fetch('http://localhost:8000/post/');
            const responseData = await response.json();
            //console.log(responseData);

            setMessages(responseData);
        }
        fetchMessage();
    }, [Messages]);


    const list = Messages.map((Message) =>
        <Box sx={{ bgcolor: '#2C7CDE', width: '300px', height:'auto', display: 'flex', flexDirection: "column", border:"1px", m:"10px", boxShadow:"1", borderRadius:2, opacity:"0.7", color:"#fff"}} key={Message.postId}>
            <Box sx={{fontSize:"16pt", fontWeight:"medium", ml:"5px", height:"80px", Color:'text.primary'}}>{Message.postContent}</Box>
            <Box sx={{fontSize:"10pt", textAlign:"right", mr:"5px", color:'text.secondary'}}>{Message.addBy}</Box>
            <Box sx={{fontSize:"8pt", textAlign:"right", mr:"5px", color:'text.secondary'}}>{Message.addAt}</Box>
        </Box>
    );

    return <Box sx={{display:'flex', flexDirection:'row', my:'10px', flexWrap:"wrap", justifyContent:"space-evenly"}}>{list}</Box>
 

}


export default MessageList