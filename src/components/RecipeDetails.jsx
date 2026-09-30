import { useLocation } from "react-router-dom"
const RecipeDetails =()=>{
    const location = useLocation()
    console.log(location.state)
return(
    <div>
        <p>RecipeDetails</p>
    </div>
)
}
export default RecipeDetails