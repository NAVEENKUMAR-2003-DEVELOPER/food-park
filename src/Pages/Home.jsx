import React, { useState } from "react";
import useFetch from "../Hooks/useFetch";
import RecipeCard from "../Components/Recipecard";
import "./Home.css";


const Home = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  return (
    <div className="inputt">
      <input
        type="text"
        placeholder="🔍Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {data?.meals?.map((meal) => (
          <RecipeCard key={meal.idMeal} recipe={meal} />
        
        ))}
      </div>
    </div>
  );
};

export default Home;
