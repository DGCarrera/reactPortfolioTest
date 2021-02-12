import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap';
import '../App.css';
import Posts from '../components/posts';
import Footer from '../components/footer';
import PostContextProvider from '../context/PostContext';

import glogo from '../logos/GarnetLabsLogoYellow.png';
import {Link} from 'react-router-dom';
class Home extends Component {
  
  render () {

    return (
   <div className="homeBody">
      <div className="GarnetLogo">
        <img  src={glogo} ></img>
      </div>
        
       <Jumbotron className="frontJumbotron">
           <h1 className="frontPageHeader">Welcome to Garnet Labs</h1>
           <p className="frontPageParagraph">Thank you for joining us.  </p>
           <p className="frontPageParagraph"> Garnet Labs is a programming duo made up of Chris Rutherford and David Carrera. Our focus is on building web, desktop and mobile applications. We’ve built projects using React, Angular, React-Native, Xamarin and Asp.Net. Our goal here at Garnet Labs is to turn your ideas into code.</p>
           <p className="frontPageParagraph">Want to learn more about us? You can learn more about <Link to='/profile/chris' className="homeLink">Chris</Link> or <Link to='/profile/david' className="homeLink">David</Link> by clicking the link. </p>
           <p className="frontPageParagraph"> Or you can call us at <span className="tintPhone" >973-506-8094</span></p>
       </Jumbotron>
       <PostContextProvider>
          <Posts></Posts>
       </PostContextProvider>
       
   </div>
  );
} 

};

export default Home;