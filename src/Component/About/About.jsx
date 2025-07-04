import React from "react";
import './About.css'
import  logos from '../../assets/logos.png'
import aboutImage from '../../assets/About.png';

const About = () => {
    return (
        <div className="About">
            <div className="about-tittle">
                <h1>About me</h1>
                <img src={About} alt=""/>
            </div> 
            <div className="about-sections">
                <div className="about-left">
                    <img src={logos} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am  an exprienced Frontend Developer </p>
                        <p>my passion for frontend development</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"50%"}} /> </div>
                        <div className="about-skill"><p>React.JS</p><hr style={{width:"70%"}} />  </div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /> </div>
                        <div className="about-skill"><p>Next JS</p><hr style={{width:"40%"}} /></div>
                    </div>
                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>Fresher</h1>
                        <p>FRESHER</p>
                    </div>
                    <hr/>
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>10</h1>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;