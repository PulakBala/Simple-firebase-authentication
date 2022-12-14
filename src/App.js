import './App.css';
import {FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth"
import app from './firebase/firebase.init';
import { useState } from 'react';
const auth = getAuth(app)
function App() {
  const [user, setUser] = useState({}); 
  const googleProvider = new GoogleAuthProvider();
  const githubProvider  = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () =>{
   
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.log('error', error);
    })
  }
  const handleSignOut = () =>{
    signOut(auth)
    .then(() => {
      setUser({})
    })
    .catch(() => {
      setUser({})
    })
  }
  const handleGithubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.error('error', error)
    })
  }
  const handleFacebookSignIn =()=>{
    signInWithPopup(auth, facebookProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.error('error', error);
    })
  }
  return (
    <div className="App">
      {/* condition ? true : false */}
      { user.uid ?
        <button onClick={handleSignOut}>Sign Out</button>
        :
        <div>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </div>
        }

       { user.uid && <div>
          <h2>User Name : {user.displayName}</h2>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
       }
    </div>
  );
}

export default App;
