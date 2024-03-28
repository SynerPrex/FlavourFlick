import React, { useState } from 'react';
import Steps from './steps';
import Ingredients from './ingredients';

const Recipe = (props) => {
  const [showSteps, setShowSteps] = useState(false);
  const data = (props.procedure).split('\n').map(step => step.trim());
  const ingredients = props.ingredients
  // console.log(ingredients)
  const handleShowSteps = () => {
    setShowSteps(true);
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={props.img} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{props.name}</h1>
            <p className="mb-8 leading-relaxed">{props.desc}</p>
            <div className="flex justify-center">
              <button onClick={handleShowSteps} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See Recipe</button>
            </div>
          </div>
        </div>
      </section>
      {showSteps && <Ingredients ingredients={ingredients}/>}
      {showSteps && <Steps steps={data} />}
    </div>
  );
}

export default Recipe;
