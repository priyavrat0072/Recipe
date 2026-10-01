import Header from "./components/Header.jsx";
import RecipeExplorer from './components/RecipeExplorer.jsx'
import RecipeDetails from "./components/RecipeDetails.jsx";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { useState , useEffect } from "react";
import { searchRecipe } from "./services/recipeAPI.js";

const App = () =>{

  const [searchedRecipe , setSearchedRecipe] = useState([])
  const [inputRecipe, setInputRecipe] = useState("");

    useEffect(()=>{
      const loadinitialRecipe = async () => {
        const data = await searchRecipe("")
        // console.log(`data : ${data}`)
        setSearchedRecipe(data)
      }
      loadinitialRecipe()
    },[])

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
