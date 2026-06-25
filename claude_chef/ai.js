import { HfInference, InferenceClient } from "@huggingface/inference";

const prompt = `
You are an expert chef.

Create a delicious recipe 

Requirements:
- Use as many of the provided ingredients as possible.
- You may include a few common pantry ingredients if necessary.
- Return the response ONLY in valid Markdown.
- Do not include any introductory text such as "Here is your recipe".
- Make the recipe practical and easy to follow.

Format the response exactly like this:

# [Recipe Name]

## Overview
- **Prep Time:** X minutes
- **Cook Time:** X minutes
- **Total Time:** X minutes
- **Servings:** X

## Ingredients
- ingredient 1
- ingredient 2
- ingredient 3

## Instructions
1. Step one
2. Step two
3. Step three

## Chef's Tips
- Tip 1
- Tip 2

## Nutritional Estimate (Per Serving)

| Nutrient | Amount |
|----------|--------|
| Calories | XXX    |
| Protein  | XX g   |
| Carbs    | XX g   |
| Fat      | XX g   |

Generate a complete recipe now.
`;

const client = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function generateRecipe(ingredients) {
    const ingredientsString = ingredients.join(', ')
  const chatCompletion = await client.chatCompletion({
    
    model: "meta-llama/Llama-3.1-8B-Instruct",
    messages: [
      {
        role: "system",content: prompt
      },
      {
        role: "user",content: `I have ${ingredientsString}. Please give a recipe you'd recommend I make`
      }
    ],
    max_tokens: 1200,
    temperature: 0.7
  });

  return chatCompletion.choices[0].message.content;
}