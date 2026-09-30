import Header from "./components/Header.jsx";
import RecipeExplorer from './components/RecipeExplorer.jsx'
import RecipeDetails from "./components/RecipeDetails.jsx";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { useState } from "react";

const App = () =>{

  const [searchedRecipe , setSearchedRecipe] = useState([])
  const [inputRecipe, setInputRecipe] = useState("");

  return(
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<RecipeExplorer searchedRecipe ={searchedRecipe} setSearchedRecipe = {setSearchedRecipe} inputRecipe={inputRecipe} setInputRecipe={setInputRecipe} />} />
          <Route path="/recipeDetail" element={<RecipeDetails/>} />
        </Routes>
      </BrowserRouter>
  )
}
export default App;

// {searchedRecipe , setSearchedRecipe}
// searchedRecipe ={searchedRecipe} setSearchedRecipe = {setSearchedRecipe}
