import React, { useEffect, useState }  from 'react'
import './Nav.css'
export default function Nav() {

    const [show, setShow] = useState(false);

    const transitionNavBar = ()=>{
        if(window.scrollY > 100){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }

    useEffect(() => {
       window.addEventListener("scroll", transitionNavBar);
       return ()=>window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && "nav_black" }`}>
            <div className="nav_contents">
                <img 
                    className="nav_logo"
                    src="/images/logos/netflix-logo-transparent.png" 
                    alt="website-logo" 
                />

                <img 
                    className="nav_avatar"
                    src="/images/avatars/avatar1.png"
                    alt="" 
                />
            </div> 
        </div>
    )
}
