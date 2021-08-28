import React, { useEffect, useState }  from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css'
export default function Nav() {

    const [show, setShow] = useState(false);
    const history = useHistory();

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
                    onClick={()=>history.push("/")}
                    className="nav_logo"
                    src="/images/logos/netflix-logo-transparent.png" 
                    alt="website-logo" 
                />

                <img 
                    onClick={()=>history.push("/profile")}
                    className="nav_avatar"
                    src="/images/avatars/avatar1.png"
                    alt="" 
                />
            </div> 
        </div>
    )
}
