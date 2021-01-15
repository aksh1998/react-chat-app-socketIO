import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';
const ENDPOINT = 'localhost:50000';

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setRoom(room);
    setName(name)
    socket = io(ENDPOINT)
    console.log(socket);
  });

  return (
    <>
      <h1>Chat</h1>
    </>
  );
}

export default Chat;
