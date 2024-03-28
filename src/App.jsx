import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Recipe from './components/recipe';
import CategorySelector from './components/category';
import Footer from './components/footer';
function fetchData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
}

function App() {
  const [recipe, setRecipe] = useState(null);
  const [categorySelected, setCategorySelected] = useState(false);

  useEffect(() => {
    const apiUrl = 'https://flavourflick.onrender.com/';
    const preferredCategory = localStorage.getItem('preferredCategory');

    if (preferredCategory !== null) {
      fetchData(apiUrl)
        .then(data => {
          let filteredRecipes = data.recipes;

          if (preferredCategory === 'true') {
            filteredRecipes = filteredRecipes.filter(recipe => recipe.vegan === true);
          } else if (preferredCategory === 'false') {
            filteredRecipes = filteredRecipes.filter(recipe => recipe.vegan === false);
          }
          const random_num = Math.floor(Math.random() * filteredRecipes.length);
          const randomRecipe = filteredRecipes[random_num];
          setRecipe(randomRecipe);
          setCategorySelected(true);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, []);

  const handleCategorySelect = () => {
    setCategorySelected(true);
  };

  return (
    <>
      <Navbar />
      {!categorySelected && <CategorySelector onCategorySelect={handleCategorySelect} />}
      {categorySelected && recipe && (
        <Recipe
          ingredients={recipe.ingredients}
          procedure={recipe.procedure}
          name={recipe.name}
          img={recipe.image}
          desc={recipe.desc}
        />
        )}
        <Footer/>
    </>
  );
}

export default App;
