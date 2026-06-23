import React from 'react'
import { useState } from 'react'

const Main = () => {

    const [ingredients, setIngredients] = useState(["onions"])
    const [showSuggestion, setShowSuggestion] = useState(false)

    const ingredientsList = ingredients.map((ingredient)=>
            <li className="ingredient-item" key={ingredient}>{ingredient} </li>
        )
    
    const addIngredients = (formData) => {
        
        const newIngredients = formData.get("ingredients")
        console.log(newIngredients)
        
        setIngredients(prev => [...prev, newIngredients])
    }
    
    const handleGetRecipe = () =>  {
        setShowSuggestion(prev => !showSuggestion)}
    
  return (
    <main>
        <form action={addIngredients} >
            <input 
            type="text"
            aria-label='add ingredient' 
            placeholder='eg. tomato' 
            name='ingredients' 
            />
            <button > Add Ingredient</button>
        </form>
        <section className="ingredients-section">
            <h2 className="ingredients-title">Ingredients</h2>

            {ingredients.length > 0 ? (
            <ul className="ingredients-list">{ingredientsList}</ul>
            ) : (
            <p className="empty-message">No ingredients added yet.</p>
            )}

            {ingredients.length > 0  ? (
                <section className="recipe-cta">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>

                    <button onClick={handleGetRecipe} className="recipe-btn">
                        Get a Recipe
                    </button>
                </section>
            ): null }
      </section>
      {showSuggestion && (<section className="recipe-section">
            <h2 className="recipe-title">Suggested Recipe</h2>

            <h3>Creamy Garlic Tomato Pasta</h3>

            <p>
                A quick and flavorful pasta dish made with fresh tomatoes,
                garlic, and a creamy sauce.
            </p>

            <h4>Ingredients</h4>
            <ul>
                <li>2 tomatoes, diced</li>
                <li>3 cloves garlic, minced</li>
                <li>250g pasta</li>
                <li>1 cup heavy cream</li>
                <li>2 tbsp olive oil</li>
                <li>Salt and pepper to taste</li>
                <li>Fresh basil (optional)</li>
            </ul>

            <h4>Instructions</h4>
            <ol>
                <li>Cook the pasta according to package instructions.</li>
                <li>Heat olive oil in a pan over medium heat.</li>
                <li>Add garlic and sauté until fragrant.</li>
                <li>Add tomatoes and cook until softened.</li>
                <li>Pour in the cream and stir well.</li>
                <li>Season with salt and pepper.</li>
                <li>Add the cooked pasta and toss to coat evenly.</li>
                <li>Serve hot and garnish with basil if desired.</li>
            </ol>
        </section>)}
    </main>
    
  )
}

export default Main