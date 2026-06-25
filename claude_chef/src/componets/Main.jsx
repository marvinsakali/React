import React, { use, useEffect, useRef } from 'react'
import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { generateRecipe } from '../../ai.js'


const Main = () => {

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)
    console.log(recipeSection)
     
    const addIngredients = (formData) => {
        
        const newIngredients = formData.get("ingredients")
                
        setIngredients(prev => [...prev, newIngredients])
    }
    
    const handleGetRecipe = async () =>  {
        const generatedRecipe = await generateRecipe(ingredients)
        setRecipe(generatedRecipe)
    }

    useEffect(()=>{
        if (recipe !== "" && recipeSection !== null){
          recipeSection.current.scrollIntoView({behavior:'smooth'})
        }
    }, [recipe])
    
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

       <IngredientsList 
        ingredients={ingredients} 
        click= {handleGetRecipe} 
        
        />
      {recipe && (<ClaudeRecipe recipe={recipe} ref={recipeSection}/>)}
    </main>
    
  )
}

export default Main