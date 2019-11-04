/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import io from 'socket.io-client'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Chip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { Add } from '@material-ui/icons';
import { themed } from '../../HOC/themed/themed';

let socket;

const Chat = (props) => {
  const {
    currentUser,
    userPhoto,
    chats,
    topics,
    addMessage,
    classes
  } = props;

  const [textValue, setTextValue] = useState('');
  const [activeTopic, setActiveTopic] = useState(topics[0]);

  const sendMessage = () => {
    socket.emit('chat message', {
      msg: textValue,
      user: currentUser,
      topic: activeTopic,
      img: userPhoto,
    });
    setTextValue('');
  };

  if (!socket) {
    socket = io(':3001');
    socket.on('chat message', (object) => {
      addMessage(object);
    });
  }

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h3" component="h3">
          Chat App
        </Typography>
        <Typography variant="h5" component="h3">
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {
                topics.map((topic, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={(el) => setActiveTopic(el.target.innerText)}
                  >
                    <ListItemText primary={topic} />
                  </ListItem>
                ))
              }
              <Add />
            </List>
          </div>
          <div className={classes.chatWindow}>
            {
              chats[activeTopic].map((message, index) => (
                <div className={classes.flex} key={index}>
                  <Chip
                    label={message.user}
                    avatar={<Avatar alt="User" src={message.img} />}
                  />
                  <p>{message.msg}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            label="Send a chat"
            className={classes.chatBox}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => sendMessage(textValue)}
          >
              Send
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default themed('components.Chat', Chat);
