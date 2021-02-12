import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap';
import '../App.css';

import chrisPhoto from '../pics/profile-chrisRutherford.png';


class Chris extends Component {
  render() {
    return (
      <div className="ChrisBody">
        <div className="profileChris">
          <h1 className="profileHeaderDavid chrisFontColor">
            Chris Rutherford
          </h1>
          <hr className="davidHR chrisBorderColor"></hr>
          <hr className="davidHR chrisBorderColor"></hr>
          <div>
            <div className="profileImage">
              <img src={chrisPhoto} />
              <p className="profileBioChris ">
              Hi, I'm Chris Rutherford, and I'm a Full-Stack Developer. I can and usually do handle tasks in all layers of an application or project. I can work with the database on the backend, wrangle with the dev-ops configuration, get data in and out of the front end, and do layout in the UI. I don't scoff at a task based on where in the stack a task is focused, and I really enjoy solving a good problem. 
              </p>
            </div>
          </div>
          <hr className="davidHR chrisBorderColor"></hr>
          <hr className="davidHR chrisBorderColor"></hr>
          <div className="davidProfileRow">
            <div className="chrisProfileList">
              <h2 className="davidProfileSubH">Certifications</h2>
              <ul>
                <li>CompTIA A+</li>
                <li>CompTIA Network+</li>
                <li>CompTIA Security+</li>
                <li>CompTIA Project+</li>
                <li>CompTIA Linux+</li>
              </ul>
            </div>
            <div className="chrisProfileList">
              <h2 className="davidProfileSubH ">Programming</h2>
              <div className="chrisProfileList2">
                <div >
                  
                  <ul>
                  <h3>Languages:</h3>
                    <li>JavaScript</li>
                    <li>C#</li>
                    <li>Xml</li>
                    <li>SQL</li>
                    <li>Python</li>
                  </ul>
                </div>

                <div >
                 
                  <ul>
                  <h3>Frame Works:</h3>
                    <li>ExpressJS</li>
                    <li>NestJS</li>
                    <li>React-Native</li>
                    <li>React</li>
                    <li>Angular (Typescript)</li>
                    <li>ElectronJs</li>
                    <li>Asp.Net Core</li>
                    <li>EntityFramework Core</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="chrisHR2 chrisBorderColor"></hr>
          <hr className="davidHR chrisBorderColor"></hr>
          <h2 className="davidProfileSubH chrisFontColor">Projects</h2>
          <p className="davidProfileParagraph chrisFontColor">
            Visit me on <a href="https://github.com/cjrutherford">Github</a> to
            see what I've been working on.{' '}
          </p>
        </div>
      </div>
    );
  }
}

export default Chris;
