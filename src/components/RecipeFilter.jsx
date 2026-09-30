import { useEffect, useState } from "react"
import RecipeCard from "./RecipeCard"
import { getAreaList, getCategoriesList, getIngredientList } from "../services/recipeAPI"
import SearchFilter from "./SearchFilter"

const RecipeFilter =({searchedRecipe})=>{

    const [categoriesList , setCategoriesList] = useState([])
    const [selectedCategory , setSelectedCategory] = useState(null)

    const [ingreidentList , setIngredentList] = useState([])
    const [selectedIngredient , setSelectedIngredient] = useState([])

    const [areaList , setAreaList] = useState([])
    const [selectedArea , setSelectedArea] = useState([])

    useEffect(()=>{
        const fetchCategoriesList = async() =>{
            const data = await getCategoriesList()
            setCategoriesList(data)
        }
        fetchCategoriesList()
    },[])

    useEffect(()=>{
        const fetchIngredientList = async() =>{
            const data = await getIngredientList()
            setIngredentList(data)
    }
        fetchIngredientList()
    },[])

    useEffect(()=>{
        const fetchAreaList = async() =>{
            const data = await getAreaList()
            setAreaList(data)
    }   
    fetchAreaList()
    },[])

    const categoryOptions = categoriesList.map((category) => ({
        label : category.strCategory,
        value : category.strCategory
    }))

    const ingredientOptions = ingreidentList?.map((ingredient)=>({
        label : ingredient.strIngredient,
        value : ingredient.strIngredient
    }))

    const areaOptions = areaList.map((area)=>({
        label : area.strArea,
        value : area.strArea
    }))
    

    const handleCategorySelect =(selectedOption) =>{
        setSelectedCategory(selectedOption)  
        
    }
    const handleIngredientSelect =(selectedOption) =>{
        setSelectedIngredient(selectedOption)  
        
    }
    const handleAreaSelect = (selectedOption) =>{
        setSelectedArea(selectedOption)
    }
    
    // useEffect(()=>{console.log(`selected category : ${selectedCategory?.label}`)},[selectedCategory])
    // useEffect(()=>{console.log(`selected ingredeint : ${selectedIngredient?.label}`)},[selectedIngredient])
    // useEffect(()=>{console.log(`selected area : ${selectedArea?.label}`)},[selectedArea])
    


    return(
        <div>
        
        <SearchFilter options={categoryOptions} onSelect = {handleCategorySelect} />
        <SearchFilter options={ingredientOptions} onSelect = {handleIngredientSelect} />
        <SearchFilter options={areaOptions} onSelect = {handleAreaSelect} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-20">
            {
                searchedRecipe.map((item)=>(
                    <RecipeCard key={item.idMeal} recipeDetails = {item}/>
                ))
            }
        </div>
        </div>
    )
}
export default RecipeFilter
