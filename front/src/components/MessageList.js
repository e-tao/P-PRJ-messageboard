import React, {useState, useEffect } from 'react';

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
        <li key={Message.postId}>{Message.postContent} | {Message.addBy} | {Message.addAt}</li>
    );


    return <div>
        <ul>{list}</ul>
    </div>

}


export default MessageList