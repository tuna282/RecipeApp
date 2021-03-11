import React from 'react';
import Recipe from './Recipe';

const Form = ({
  input, storeInput, sendRequest, recipes,
}) => (
    <>
      <form className="form">
        <label htmlFor="input"></label>
        <input onChange={storeInput} type="text" id="input" value={input}/>
        <button onClick={sendRequest} className="submit-btn">Search</button>
      </form>
      <div className="recipes">
      {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          title={recipe.recipe.label}
          ingredients={recipe.recipe.ingredientLines}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories} />))}
      </div>
    </>
);

export default Form;
