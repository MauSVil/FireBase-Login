import React, { useEffect } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setCurrentUser } from '../../redux/actions/login-data';
import { addMessage } from '../../redux/actions/chat';
import Chat from '../Chat';

firebase.initializeApp({
  apiKey: 'AIzaSyDNJIm761mk3Emc2-RbsUSLwgL-XNBAbi4',
  authDomain: 'chat-firebase-59ed9.firebaseapp.com',
});

function Login(props) {
  const {
    currentUser,
    setCurrentUser,
    userPhoto,
    chats,
    topics,
    addMessage
  } = props;

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      (user) => {
        setCurrentUser({ currentUser: user.displayName, userPhoto: user.photoURL });
      },
    );
  }, [setCurrentUser]);

  return (
    <div className="App">
      {currentUser
        ? (
          <>
            <div>
              Signed In!
            </div>
            <button
              type="button"
              onClick={() => {
                firebase.auth().signOut();
                setCurrentUser({ currentUser: null });
              }}
            >
              Sign Out
            </button>
            <Chat
              currentUser={currentUser}
              userPhoto={userPhoto}
              chats={chats}
              topics={topics}
              addMessage={addMessage}
            />
          </>
        )
        : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.loginData.currentUser,
  userPhoto: state.loginData.userPhoto,
  chats: state.chat.chat,
  topics: state.chat.topics,
}
);

export default connect(mapStateToProps, { setCurrentUser, addMessage })(Login);
