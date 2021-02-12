import React from 'react';
import '../../App.css'
import './contact.css'
import { Link } from "react-router-dom";



function Contact() {
    return (
        
        <div className = 'contact'>
            <video src = '/videos/home.mp4' autoPlay loop muted />
            
            <h1>Contact info
            <i class="far fa-id-card"></i>
            </h1>
            <div className = 'items'>
                <ul className = 'imgs'>
                    <a href="https://linkedin.com/in/sirjan-chawla-2b66b41b6 " onClick = "window.open(this.href)">
                        <img className ='link' src="images/linkedin(2).png" />
                    </a>
                    <a  href="https://www.instagram.com/sirjanchawla/" onClick = "window.open(this.href)">
                        <img className = 'insta' src = 'images/insta.png'/>
                    </a>
                    <a  href = "mailto:sirjaneminemchawla@gmail.com">
                        <img className = 'gmail' src = 'images/gmail.png'/>
                    </a>    
                
                </ul>
            
            
                </div>
        </div>
    )
}

export default Contact;