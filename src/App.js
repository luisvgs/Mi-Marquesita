import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./components/Recipe";
import NavBar from "./components/NavBar";
import {Navbar,Nav,FormControl,Button, Form} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import BlogComponent from "./components/BlogComponent";
import PricesComponent from "./components/PricesComponent";
import DashBoardComponent from "./components/DashBoardComponent";



const App =()=> {

  return(
    <div className="App">


    
    <Router>
      <NavBar />
      <Route path="/" exact component={ DashBoardComponent } />
      <Route path="/about" component={AboutComponent} />
      <Route path="/prices" component={PricesComponent} />
      <Route path="/blog" component={BlogComponent} />
    </Router>



      
    </div>
  )
}

// function to convert the global state obtained from redux to local props

export default App;












