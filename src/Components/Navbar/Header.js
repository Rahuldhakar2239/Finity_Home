import React from 'react';
// import PropTypes from 'prop-types'
import styles from './navbar.module.css';
import {useState} from "react";
import Logo from '../Navbar/Logo.svg';
import user from '../Navbar/user-2.jpeg';

export default function Header(props) {
    const [Choice,setChoice] = useState(true);
    const [Logged,setLogged] = useState(true);
    return (
    <header className={styles.header} {...props}>
        <div className={styles.container}>
            <div className={styles.logo} href="/">
                <img src={Logo} alt="Logo"></img>
            </div>
            <div className='finhome' style={{display: "flex",justifyContent:"center",textAlign:"center",marginRight:"auto"}}>
                <a href="https://inspiring-feynman-894dfd.netlify.app/">
                <div className='mainpage' style={{color: "white" , paddingRight : "8px",fontFamily: 'Montserrat',fontStyle: "normal",fontWeight: "800",fontSize: "18px",lineHeight: "22px"}}><span onClick={() => setChoice(true)} className={Choice ? styles.homeff : styles.not}>HOME</span></div>
                </a>
               <a href="http://localhost:3000/">
                <div className='forum' style={{color: "white" , paddingRight : "10px",fontFamily: 'Montserrat',fontStyle: "normal",fontWeight: "800",fontSize: "18px",lineHeight: "22px"}}><span onClick={() => setChoice(false)} className={Choice ? styles.not : styles.homeff}>FORUM</span></div>
                </a>
            </div>
            {Logged ? (
            <div className={styles.userInfo} style={{display:"flex",marginTop:"14px",marginRight:"4%"}}>
            <p style={{color: "white",paddingRight: "10px",marginTop:"4px",fontFamily: 'Playfair Display',fontStyle: "normal",fontWeight: "700",letterSpacing:"0.06em",fontSize: "18px"}}>Aditya</p>
            <img src={user} alt="User" style={{borderRadius:"50%",width: "35px",height: "35px"}}></img>
          </div>
        ) : (
          <>
          <div className={styles.logs}>
            <div className={styles.login}>Login</div>
            <div className={styles.sign}>Sign Up</div>
        </div>
        </>
        )}
        </div>
    </header>
        
    )
}

