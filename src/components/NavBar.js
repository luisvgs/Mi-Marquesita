import React from "react";
import {Navbar,Nav,FormControl,Button, Form} from 'react-bootstrap';
import getSearch from "../App";
import updateSearch from "../App";
import search from "../App";
import logo from "../images/logo.png";

const NavBar = () =>{
    return(
      <Navbar bg="light" variant="light">
        <img className="logo"src={logo} alt="logo" />
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Blog</Nav.Link>
          <Nav.Link href="#features">Prices</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
        
        <form onSubmit ={getSearch} className="search-form">
          <FormControl className="search-bar" type="text" value="" placeholder ="Buscar ahora!"onChange={updateSearch}/>
          <Button className = "search-button" type="submit"variant="outline-primary">Search</Button>
        </form>
      </Navbar>
    )
}
//Add {search} into formcontrol value
export default NavBar;