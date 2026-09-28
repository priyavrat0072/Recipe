import { useEffect } from "react";
import { getCategoriesList } from "./services/recipeAPI";

const App = () => {
  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <div>
      <p className="text-4xl font-bold text-blue-600 text-center">App</p>
    </div>
  );
};
export default App;
