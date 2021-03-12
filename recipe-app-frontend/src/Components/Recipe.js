import React from 'react';

const Recipe = ({
  title, ingredients, image, calories,
}) => {
  const roundedCalories = floatedCalories => floatedCalories.toString().split('.')[0];
  return (
  <div className="recipe">
    <h2 className="recipe-title">
      {title}
    </h2>
    <div className="recipe-details">
      <img className="recipe-image" src={image}></img>
      <h3 className="calories">Calories</h3>
      <p>{roundedCalories(calories)}</p>
      <h3 className="ingredients">Ingredients</h3>
      <p className="recipe-ingredients">
        {ingredients.map((ingredient, index) => (index === ingredients.length - 1 ? `${ingredient}.` : `${ingredient}, `))}
      </p>
    </div>
  </div>
  );
};

export default Recipe;
