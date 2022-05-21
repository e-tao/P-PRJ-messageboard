import './App.css';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import React from 'react';
import { Paper } from '@mui/material';

function App() {

  return (

    <Paper sx={{ bgcolor: "#fff", width: "1000px", height: "auto", display: "flex", flexDirection: "column", flexWrap:"wrap", justifyContent: "center", alignItems: "center", borderRadius: 2, mx: "auto" }}>
      <MessageInput />      
      <MessageList />
    </Paper>

  );
}

export default App;
