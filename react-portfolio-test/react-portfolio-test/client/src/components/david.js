import React, { Component } from 'react';
import { Button, Jumbotron, } from 'reactstrap';
import '../App.css';
import DavidPic from '../pics/david-WebPhoto.png';

class David extends Component {
  render () {
    return (
    <div className="DavidBody">
        <div className="profileDavid">
            <h1 className="profileHeaderDavid">David Carrera</h1>
            <hr className="davidHR"></hr>
            <hr className="davidHR"></hr>
            <div>
                <div className="profileImage">
                    <img  src={DavidPic} />
                    <p className="profileBioDavid">My name is David Carrera and I'm a Front End Developer. I've worked as a programmer for about 4 years now. I've built Ads for Target and I've worked with Individuals to build their personal sites. I've worked on web, mobile and desktop projects and I'm currently finishing my degree in software engineering. I'm also currently working on becoming a full stack developer. </p>
                </div>
               
            </div>
            <hr className="davidHR"></hr>
            <hr className="davidHR"></hr>
            <div className="davidProfileRow">
            <div className="davidProfileList">
                <h2 className="davidProfileSubH">Certifications</h2>
                <ul >
                    <li>CompTIA A+</li>
                    <li>MTA 98-349 Windows OS Fundamentals</li>
                    <li>MTA Software Development Fundamentals </li>
                    <li>CIW Site Development Assosiates </li>
                    <li>CIW Advanced Html5 and CSS3 Specialist</li>
                </ul>
            </div>
            <div className="davidProfileList">
                <h2 className="davidProfileSubH" >Programming</h2>
                <ul >
                    <li>Languages: </li>
                    <li>CSS, HTML, Xml, JavaScript, PHP, SQL, C++, C#, Python</li>
                    <li>Frame Works: </li>
                    <li>Wordpress, React, React-Native, Xamarin</li>
                    <li>Libraries:</li>
                    <li>bootstrap, jquery, typescript,express, expo</li>
                </ul>
            </div>
            </div>
            <hr className="davidHR2"></hr>
            <hr className="davidHR"></hr>
            <h2 className="davidProfileSubH">Projects</h2>
            <p className="davidProfileParagraph">Visit me on <a href="https://github.com/DGCarrera" >Github</a> to see what I've been working on. </p>
            
        </div>
   </div>
  );
} 

};

export default David;