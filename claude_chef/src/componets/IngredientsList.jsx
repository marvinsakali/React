import React from 'react'

const IngredientsList = (props) => {
    const ingredientsList = props.ingredients.map((ingredient)=>
            <li className="ingredient-item" key={ingredient}>{ingredient} </li>
        )
  return (
     <section className="ingredients-section">
            <h2 className="ingredients-title">Ingredients</h2>

            {props.ingredients.length > 0 ? (
            <ul className="ingredients-list">{ingredientsList}</ul>
            ) : (
            <p className="empty-message">No ingredients added yet.</p>
            )}

            {props.ingredients.length > 3 ? (
                <section className="recipe-cta">
                    <div  >
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>

                    <button onClick={props.click} className="recipe-btn">
                        Get a Recipe
                    </button>
                </section>
            ): null }
      </section>
  )
}

export default IngredientsList