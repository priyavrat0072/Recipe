import { useLocation , useNavigate } from "react-router-dom"
const RecipeDetails =()=>{

    console.log("Recipe details")
    const navigate = useNavigate()

    const location = useLocation()
    console.log(location.state)
return(
    <div>
        <p>RecipeDetails</p>
        <button onClick={()=>navigate(-1)}>go back</button>
    </div>
)
}
export default RecipeDetails