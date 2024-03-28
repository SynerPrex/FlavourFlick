import React from 'react';

const Ingredients = (props) => {
  return (
    <div className=' m-15 flex flex-col items-center justify-center'>
      <h2 className="mb-2 text-center text-lg pt-10 text-gray-900 dark:text-white">Ingredients</h2>
      <ul className="space-y-1 w-full text-center p-10 text-gray-500  dark:text-gray-400">
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;
