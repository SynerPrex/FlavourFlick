import React, { useState } from 'react';

const CategorySelector = () => {
  // State to hold the selected category
  const [selectedCategory, setSelectedCategory] = useState('');
  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Save selected category to local storage
    localStorage.setItem('preferredCategory', category);
    location.reload()
    alert('Please Wait For Some Time');
  };

  return (
    <div className="max-w-md flex flex-col justify-center items-center mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg text-center font-semibold mb-4">Please select your preferred category</h2>
      <div className="space-y-4 flex flex-col justify-center items-center">
        <button className="w-full btn rounded-lg bg-slate-900 text-white p-5" onClick={() => handleCategorySelect(true)}>Pure Vegetarian</button>
        <button className="w-full btn rounded-lg bg-slate-900 text-white p-5" onClick={() => handleCategorySelect('both')}>Both Vegetarian and Non-Vegetarian</button>
        <button className="w-full btn rounded-lg bg-slate-900 text-white p-5" onClick={() => handleCategorySelect(false)}>Pure Non-Vegetarian</button>
      </div>
    </div>
  );
};

export default CategorySelector;
