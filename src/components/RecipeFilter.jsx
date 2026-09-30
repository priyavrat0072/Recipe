import { useEffect, useMemo, useState } from "react"
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

    const category = searchParams.get("category")
    const ingredient = searchParams.get("ingredient")
    const area = searchParams.get("area")

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

    



    const categoryOptions = useMemo(()=>{
        return categoriesList.map((category) => ({
        label : category.strCategory,
        value : category.strCategory
    }))
    },[categoriesList])

    const ingredientOptions = useMemo(()=>{
        return ingreidentList?.map((ingredient)=>({
        label : ingredient.strIngredient,
        value : ingredient.strIngredient
    }))
    },[ingreidentList])

    const areaOptions = useMemo(() => {
        return areaList.map((area)=>({
        label : area.strCountry,
        value : area.strCountry
    }))
    },[areaList])
    

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

    useEffect(()=>{
        const category = searchParams.get("category")
        const ingredient = searchParams.get("ingredient")
        const area = searchParams.get("area")
        
        const categoryOption = categoryOptions.find(option => option.value === category)
        const ingredientOption = ingredientOptions.find(option => option.value === ingredient)
        const areaOption = areaOptions.find(option => option.value === area)

        setSelectedCategory(categoryOption || null)
        setSelectedIngredient(ingredientOption || null)
        setSelectedArea(areaOption || null)


    },[searchParams , categoryOptions , ingredientOptions , areaOptions])

    
    // useEffect(()=>{console.log(`selected category : ${selectedCategory?.label}`)},[selectedCategory])
    // useEffect(()=>{console.log(`selected ingredeint : ${selectedIngredient?.label}`)},[selectedIngredient])
    // useEffect(()=>{console.log(`selected area : ${selectedArea?.label}`)},[selectedArea])
    // console.log(`${selectedCategory?.label}`)
    // console.log(`${selectedIngredient?.label}`)
    // console.log(`${selectedArea?.label}`)

// console.log("searchedRecipe in RecipeFilter:", searchedRecipe);
// console.log("is array:", Array.isArray(searchedRecipe));

    const recipes = searchedRecipe || [];

    const filteredRecipes = searchedRecipe.filter((recipe) => {
        if(category && recipe.strCategory !== category){
            return false
        }
        if(area && recipe.strCountry !== area){
            return false
        }
        if(ingredient){
            const ingredients = Array.from({length : 20},(_, index)=>
                recipe[`strIngredient${index+1}`]
            );
            if(!ingredients.includes(ingredient)){
                return false
            }
        }
        return true
    })
    // console.log(`filteredRecipes : ${filteredRecipes}`)


    return(
        <div>
        
        <div className="flex items-center justify-center gap-12 mt-6">
           <div className="w-64"> <SearchFilter options={categoryOptions} value={selectedCategory} onSelect = {handleCategorySelect} placeholder="Select Category..." /> </div>
           <div className="w-64"> <SearchFilter options={ingredientOptions} value={selectedIngredient} onSelect = {handleIngredientSelect} placeholder="Select Ingredient..." /> </div>
           <div className="w-64"> <SearchFilter options={areaOptions} value={selectedArea} onSelect = {handleAreaSelect} placeholder="Select Area..."/> </div>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-20">
            {
                filteredRecipes.map((item)=>(
                    <RecipeCard key={item.idMeal} recipeDetails = {item}/>
                ))
            }
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-20">
    {filteredRecipes.length > 0 ? (
        filteredRecipes.map((item) => (
            <RecipeCard
                key={item.idMeal}
                recipeDetails={item}
            />
        ))
    ) : (
        <p className="col-span-full text-center text-white">
            No recipes found.
        </p>
    )}
</div>


        </div>
    )
}
export default RecipeFilter
