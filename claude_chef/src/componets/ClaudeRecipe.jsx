import React from 'react'
import Markdown from 'react-markdown'
import ReactMarkdown from "react-markdown";

const ClaudeRecipe = ({recipe, ref}) => {
  return (
    <section className="recipe-section" aria-live='polite'>
        <h2 ref={ref}>Chef Claude Recomends: </h2>
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
  )
}

export default ClaudeRecipe