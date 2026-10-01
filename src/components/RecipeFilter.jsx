import { useEffect, useMemo, useState } from "react";
import RecipeCard from "./RecipeCard";
import {
  getAreaList,
  getCategoriesList,
  getIngredientList,
} from "../services/recipeApi.js";
import SearchFilter from "./SearchFilter";
import { useSearchParams } from "react-router-dom";


const RecipeFilter = ({ searchedRecipe , loading }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [ingreidentList, setIngredentList] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const [areaList, setAreaList] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);

  const category = searchParams.get("category");
  const ingredient = searchParams.get("ingredient");
  const area = searchParams.get("area");

  /* fetching the data for list of category from api */
  useEffect(() => {
    const fetchCategoriesList = async () => {
      const data = await getCategoriesList();
      setCategoriesList(data);
    };
    fetchCategoriesList();
  }, []);

   /* fetching the data for list of ingredient from api */
  useEffect(() => {
    const fetchIngredientList = async () => {
      const data = await getIngredientList();
      setIngredentList(data);
    };
    fetchIngredientList();
  }, []);

   /* fetching the data for list of area from api */
  useEffect(() => {
    const fetchAreaList = async () => {
      const data = await getAreaList();
      setAreaList(data);
    };
    fetchAreaList();
  }, []);

  /* creating array for category options to pass it to dropdown list , useMemo for stopping recreation of categoryOptions array on every re-render */
  const categoryOptions = useMemo(() => {
    return categoriesList.map((category) => ({
      label: category.strCategory,
      value: category.strCategory,
    }));
  }, [categoriesList]);

  /* creating array for ingredient options to pass it to dropdown list , useMemo for stopping recreation of ingredientOptions array on every re-render */
  const ingredientOptions = useMemo(() => {
    return ingreidentList?.map((ingredient) => ({
      label: ingredient.strIngredient,
      value: ingredient.strIngredient,
    }));
  }, [ingreidentList]);

  /* creating array for area options to pass it to dropdown list , useMemo for stopping recreation of areaOptions array on every re-render */
  const areaOptions = useMemo(() => {
    return areaList.map((area) => ({
      label: area.strCountry,
      value: area.strCountry,
    }));
  }, [areaList]);

  /* handleCategorySelect set the user selected option from dropdown in SelectedCategory and in params for maintaing user selected user options in url */
  const handleCategorySelect = (selectedOption) => {
    setSelectedCategory(selectedOption);
    const params = new URLSearchParams(searchParams);
    if (selectedOption) {
      params.set("category", selectedOption.value);
    } else {
      params.delete("category");
    }
    setSearchParams(params);
  };

  /* handleIngredientSelect set the user selected option from dropdown in selectedIngredient and in params for maintaing user selected user options in url */
  const handleIngredientSelect = (selectedOption) => {
    setSelectedIngredient(selectedOption);

    const params = new URLSearchParams(searchParams);
    if (selectedOption) {
      params.set("ingredient", selectedOption.value);
    } else {
      params.delete("ingredient");
    }
    setSearchParams(params);
  };

  /* handleAreaSelect set the user selected option from dropdown in selectedArea and in params for maintaing user selected user options in url */
  const handleAreaSelect = (selectedOption) => {
    setSelectedArea(selectedOption);

    const params = new URLSearchParams(searchParams);
    if (selectedOption) {
      params.set("area", selectedOption.value);
    } else {
      params.delete("area");
    }
    setSearchParams(params);
  };


  /* setting the options in dropdown based on users input when user returns from recipe detail page so that user can se filtered results */
  useEffect(() => {
    const category = searchParams.get("category");
    const ingredient = searchParams.get("ingredient");
    const area = searchParams.get("area");

    const categoryOption = categoryOptions.find(
      (option) => option.value === category,
    );
    const ingredientOption = ingredientOptions.find(
      (option) => option.value === ingredient,
    );
    const areaOption = areaOptions.find((option) => option.value === area);

    setSelectedCategory(categoryOption || null);
    setSelectedIngredient(ingredientOption || null);
    setSelectedArea(areaOption || null);
  }, [searchParams, categoryOptions, ingredientOptions, areaOptions]);


  const recipes = searchedRecipe || [];

  /* narrow down the recipe list based on user requirements and create filteredRecipes array*/
  const filteredRecipes = searchedRecipe.filter((recipe) => {
    if (category && recipe.strCategory !== category) {
      return false;
    }
    if (area && recipe.strCountry !== area) {
      return false;
    }
    if (ingredient) {
      const ingredients = Array.from(
        { length: 20 },
        (_, index) => recipe[`strIngredient${index + 1}`],
      );
      if (!ingredients.includes(ingredient)) {
        return false;
      }
    }
    return true;
  });


  return (
    <div>
      <div  className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12 mt-6 px-4">
        <div className="w-full sm:w-56 lg:w-64">
          {" "}
          <SearchFilter
            options={categoryOptions}
            value={selectedCategory}
            onSelect={handleCategorySelect}
            placeholder="Select Category..."
          />{" "}
        </div>
        <div className="w-full sm:w-56 lg:w-64">
          {" "}
          <SearchFilter
            options={ingredientOptions}
            value={selectedIngredient}
            onSelect={handleIngredientSelect}
            placeholder="Select Ingredient..."
          />{" "}
        </div>
        <div className="w-full sm:w-56 lg:w-64">
          {" "}
          <SearchFilter
            options={areaOptions}
            value={selectedArea}
            onSelect={handleAreaSelect}
            placeholder="Select Area..."
          />{" "}
        </div>
      </div>

      {
        loading ? (
            <div className="flex flex-col items-center justify-center py-32">
    <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-amber-500 animate-spin" />
    <p className="mt-4 text-white/70 text-base">Loading recipes...</p>
  </div>
        ):(
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-8 lg:p-12 xl:p-20 justify-items-center">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((item) => (
            <RecipeCard key={item.idMeal} recipeDetails={item} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 sm:py-20 text-center px-4">
            <div className="relative mb-7">
              <div
                className="w-28 h-28 rounded-full bg-mauve-800/80 flex items-center justify-center border border-white/10 shadow-2xl"
              >
                <span className="text-6xl">🥘</span>
              </div>

              <div
                className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg"
              >
                <span className="text-xl">?</span>
              </div>
            </div>

            <h2 className="text-white text-2xl sm:text-4xl font-black italic tracking-tight">
              No Recipe Found...
            </h2>

            <div className="mt-3 w-24 h-1 rounded-full bg-white/50"></div>

            <p className="mt-5 text-white/60 text-base text-center max-w-md">
              We couldn't find anything matching your search.
              Clear filters and try again...
            </p>
          </div>
        )}
      </div>
        )
      }


    </div>
  );
};
export default RecipeFilter;
