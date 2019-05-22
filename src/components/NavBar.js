import React from "react";
import {Navbar,Nav,FormControl,Button, Form} from 'react-bootstrap';
import getSearch from "../App";
import updateSearch from "../App";
import search from "../App";
import logo from "../images/logo.png";
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BlogComponent from "./BlogComponent";

const NavBar = () =>{
    return(

        <Navbar bg="light" variant="light">
          
          <Link to="/"><img className="logo"src={logo} alt="logo" /></Link>
          
          <Navbar.Brand><Link to="/" className="links">Home</Link></Navbar.Brand>
          <Nav className="mr-auto">
          
          
            <Nav.Link><Link to={"/prices"} className="links">Prices</Link></Nav.Link>
            <Nav.Link><Link to={"/about"} className="links">About</Link></Nav.Link>
          </Nav>
          
          <form onSubmit={getSearch} className="search-form">
            <FormControl className="search-bar" type="text" value="" placeholder ="Buscar ahora!"onChange={updateSearch}/>
            <Button className = "search-button" type="submit"variant="outline-primary">Search</Button>
          </form>
        </Navbar>
   

    )
}
//Add {search} into formcontrol value
export default NavBar;