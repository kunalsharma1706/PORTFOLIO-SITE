import React from "react";
import './Hero.css'
import Profile from '../../assets/Profile.jpg'

const Hero = () =>{
    return (
        <div className="hero">
            <img src={Profile} alt="Profile" />
            <h1>I'm Kunal, frontend developer based in india</h1>
            <p>I am a frontend developer ,fresher</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}
export default Hero;