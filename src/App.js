import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./components/Recipe";

const App =()=> {
  const APP_ID= "626e75f9";
  const APP_KEY= "98af4d27097caae3b0f6e734c9ac3f67";


  const [recipes, setRecipes] = useState([]);
 

  useEffect(()=>{
    getRecipes();
  }, []);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
 
    setRecipes(data.hits);


  
  }

  const exampleReq= `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  return(
    <div className="App">
      <form className="search-form">

        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
        
      </form>

      
      
    </div>
  )
};

// function to convert the global state obtained from redux to local props

export default App;












