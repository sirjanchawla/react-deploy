import React from 'react'
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src = '/videos/home.mp4' autoPlay loop muted />
            
            <h1>THE PERFECT PLACE TO KNOW MORE ABOUT ME!</h1>
            <p>Hey There! My Name is Sirjan Chawla , I am a final year student at the University

                of Alberta. I love to learn through working on projects, just like this one. I have 

                worked on various other fun projects . Apart

                from computer science, I often like to read about the financial , economic sectors.

                I hope you have a wonderful day/night. enjoy navigating through the website. 
                
            </p>
            
            
        </div>
    )
}

export default HeroSection;
