import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";

const DashBoardComponent = () =>{
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
      )
}



export default DashBoardComponent;