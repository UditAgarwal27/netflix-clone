import React, { useRef } from 'react'
import { auth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from '../../firebase';
import './SignInScreen.css'

export default function SignInScreen() {
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
   
    const register = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch(err=>{
            alert(err.message);
        });
    }
    const signIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch(err=>{
            alert(err.message);
        });
    }

    return (
        <div className="signinscreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4>
                    <span className="signinscreen_gray">New to Netflix? </span>
                    <span className="signinscreen_link" onClick={register}>Sign Up Now</span>
                </h4>
            </form>
        </div>
    )
}
