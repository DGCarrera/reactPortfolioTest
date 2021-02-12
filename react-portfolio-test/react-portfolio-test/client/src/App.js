import React from 'react';
import logo from './logo.svg';
import Home from '../src/components/home';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import NavigationBar from './components/navigation'
import './App.css';
import David from './components/david';
import Footer from './components/footer';
import Chris from './components/chris';
import ContactUs from './components/contactUs'

import {ContactProvider} from './context/Contactcontext';


function App() {
  return (
    <div >
      <Router>
      <NavigationBar ></NavigationBar>
      <Route path='/' exact component={Home} />
      <Route path='/profile/chris' component={Chris} />
      <Route path='/profile/david' component={David} />
      <ContactProvider>
      <Route path='/contactUs' component={ContactUs} />
      </ContactProvider>
      </Router>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
