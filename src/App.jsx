import Header from "./components/Header.jsx";
import RecipeExplorer from './components/RecipeExplorer.jsx'
import RecipeDetails from "./components/RecipeDetails.jsx";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { useState , useEffect } from "react";
import { searchRecipe } from "./services/recipeApi.js";

const App = () =>{

  const [searchedRecipe , setSearchedRecipe] = useState([])
  const [inputRecipe, setInputRecipe] = useState("");
  const [loading , setLoading] = useState(true)

    /* Fetching the initial list of the recipes for home page */
    useEffect(()=>{
      const loadinitialRecipe = async () => {
        const data = await searchRecipe("")
        setSearchedRecipe(data)
        setLoading(false)
      }
      loadinitialRecipe()
    },[])

  return(
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<RecipeExplorer searchedRecipe ={searchedRecipe} setSearchedRecipe = {setSearchedRecipe} inputRecipe={inputRecipe} setInputRecipe={setInputRecipe} loading={loading} setLoading={setLoading}/>} />
          <Route path="/recipeDetail" element={<RecipeDetails/>} />
        </Routes>
      </BrowserRouter>
  )
}
export default App;

