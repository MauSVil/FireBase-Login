import React, {useState, useEffect} from 'react';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
  apiKey: 'AIzaSyDNJIm761mk3Emc2-RbsUSLwgL-XNBAbi4',
  authDomain: 'chat-firebase-59ed9.firebaseapp.com'
})

function App() {
  const [ isSignedIn, setSignedIn ] = useState(false)
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      user => {
        setSignedIn(!!user)
      }
    )
  }, [])

  const { currentUser } = firebase.auth();
 
  return (
    <div className="App">
      {isSignedIn
      ? <>
          <div>
            Signed In!
          </div>
          <button
            onClick={() => {
            firebase.auth().signOut()
          }}
          >
            Sign Out
          </button>
          <h1>Welcome {currentUser.displayName}</h1>
          <img alt="pp" src={currentUser.photoURL} />
        </>
      : <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
      }
    </div>
  );
}

export default App;
