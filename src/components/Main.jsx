import React from 'react'
import RecipeCard from './RecipeCard.jsx'

export default function () {
  const RecipeCards = [...Array(10).keys()].map((value, index) => <RecipeCard key={index}/>)
  return <div className="main-content">
    <header>
      <div>
        <h1>Каталог Рецептов</h1>
      </div>
    </header>
    <div className='content'>
      <div className="recipe-cards">
        {RecipeCards}
      </div>
    </div>
  </div>
}
