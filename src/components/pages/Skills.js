import React from 'react';
import '../../App.css'
import './skills.css';

function Skills() {
    return (
        <div className = 'skills'>
            <video src = '/videos/home.mp4' autoPlay loop muted />
            
            <h1>Skills</h1>
            <div class="row">
                <ul className = 'column'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>PYTHON</li>
                    <li>JAVA</li>
                    <li>JUPYTER</li>
                </ul>

                <ul className = 'column'>
                    <li>MS EXCEL</li>
                    <li>IBM SPSS</li>
                    <li>SQL</li>
                    <li>FIREBASE</li>
                    <li>ANDROID STUDIO</li>
                </ul>
            </div>
            
            
            
            
        </div>
    )
}

export default Skills;