import React, { useState } from 'react'
import SignInScreen from '../SignInScreen/SignInScreen';
import './LoginScreen.css'
export default function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="loginscreen">
            <div className="loginscreen_background">
                <img className="loginscreen_logo"
                    // src="/images/logos/netflix-logo-transparent.png" 
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="" 
                />
                <button className="loginscreen_button" onClick={()=>setSignIn(true)}>Sign In</button> 

                <div className="loginscreen_gradient"></div>  
            </div>

            <div className="loginscreen_body">
                {signIn ? (
                    <SignInScreen />
                ) : (
                <>
                    <h1>Unlimited films, programmes and 
                        more.</h1>
                    <h2>Watch anywhere. Cancel at anytime.</h2>
                    <h3>Ready to watch? Ente you email to create or restart your membership</h3>

                    <div className="loginscreen_input">
                        <form>
                            <input type="email" placeholder="Email Address" />
                            <button className="loginscreen_getstarted" onClick={()=>setSignIn(true)}>GET STARTED</button>
                        </form>
                    </div>
                </>
                )}
                
            </div>
        </div>
    )
}
