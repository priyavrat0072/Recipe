import { useEffect, useState } from "react"
import RecipeCard from "./RecipeCard"
import { getAreaList, getCategoriesList, getIngredientList } from "../services/recipeAPI"
import SearchFilter from "./SearchFilter"
import { useSearchParams } from "react-router-dom"

const RecipeFilter =({searchedRecipe})=>{

    const [searchParams , setSearchParams] = useSearchParams()

    const [categoriesList , setCategoriesList] = useState([])
    const [selectedCategory , setSelectedCategory] = useState(null)

    const [ingreidentList , setIngredentList] = useState([])
    const [selectedIngredient , setSelectedIngredient] = useState(null)

    const [areaList , setAreaList] = useState([])
    const [selectedArea , setSelectedArea] = useState(null)

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
        label : area.strCountry,
        value : area.strCountry
    }))
    

    const handleCategorySelect =(selectedOption) =>{
        setSelectedCategory(selectedOption)
        const params  = new URLSearchParams(searchParams)
        if(selectedOption){
            params.set("category",selectedOption.value)
        }else{
            params.delete("category")
        }
        setSearchParams(params)
    }

    const handleIngredientSelect =(selectedOption) =>{
        setSelectedIngredient(selectedOption)  

        const params = new URLSearchParams(searchParams)
        if(selectedOption){
            params.set("ingredient",selectedOption.value)
        }else{
            params.delete("ingredient")
        }
        setSearchParams(params)
    }


    const handleAreaSelect = (selectedOption) =>{
        setSelectedArea(selectedOption)

        const params = new URLSearchParams(searchParams)
        if(selectedOption){
            params.set("area",selectedOption.value)
        }else{
            params.delete("area")
        }
        setSearchParams(params)
    }

    
    // useEffect(()=>{console.log(`selected category : ${selectedCategory?.label}`)},[selectedCategory])
    // useEffect(()=>{console.log(`selected ingredeint : ${selectedIngredient?.label}`)},[selectedIngredient])
    // useEffect(()=>{console.log(`selected area : ${selectedArea?.label}`)},[selectedArea])
    // console.log(`${selectedCategory?.label}`)
    // console.log(`${selectedIngredient?.label}`)
    // console.log(`${selectedArea?.label}`)

    const filteredRecipes = searchedRecipe.filter((recipe) => {
        if(selectedCategory && recipe.strCategory !== selectedCategory.value){
            return false
        }
        if(selectedArea && recipe.strCountry !== selectedArea.value){
            return false
        }
        if(selectedIngredient){
            const ingredients = Array.from({length : 20},(_, index)=>
                recipe[`strIngredient${index+1}`]
            );
            if(!ingredients.includes(selectedIngredient.value)){
                return false
            }
        }
        return true
    })
    console.log(`filteredRecipes : ${filteredRecipes}`)


    return(
        <div>
        
        <div className="flex items-center justify-center gap-12 mt-6">
           <div className="w-64"> <SearchFilter options={categoryOptions} onSelect = {handleCategorySelect} placeholder="Select Category..." /> </div>
           <div className="w-64"> <SearchFilter options={ingredientOptions} onSelect = {handleIngredientSelect} placeholder="Select Ingredient..." /> </div>
           <div className="w-64"> <SearchFilter options={areaOptions} onSelect = {handleAreaSelect} placeholder="Select Area..."/> </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-20">
            {
                filteredRecipes.map((item)=>(
                    <RecipeCard key={item.idMeal} recipeDetails = {item}/>
                ))
            }
        </div>
        </div>
    )
}
export default RecipeFilter
