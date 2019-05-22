import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./components/Recipe";
import NavBar from "./components/NavBar";
import {Navbar,Nav,FormControl,Button, Form} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App =()=> {
  const APP_ID= "626e75f9";
  const APP_KEY= "98af4d27097caae3b0f6e734c9ac3f67";

//states
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");

  

  useEffect(()=>{
    getRecipes();
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }



  const updateSearch = e =>{
    setSearch(e.target.value)
  };
  

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch(" ");
  }


  const exampleReq= `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  return(
    <div className="App">

    <NavBar />
      
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))};
      </div>


      
    </div>
  )
}

// function to convert the global state obtained from redux to local props

export default App;












