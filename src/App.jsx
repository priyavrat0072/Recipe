import Header from "./components/Header.jsx";
import RecipeExolorer from "./components/RecipeExplorer.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";
import { BrowserRouter , Routes , Route } from "react-router-dom";

const App = () =>{
  return(
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<RecipeExolorer/>}  />
          <Route path="/recipeDetail" element={<RecipeDetails/>} />
        </Routes>
      </BrowserRouter>
  )
}
export default App;
