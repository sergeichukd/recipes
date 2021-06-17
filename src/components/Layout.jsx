import React from 'react'

import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import RecipeDetails from './RecipeDetails.jsx'

export default function (props) {
  return (
    <div className="layout">
      <Navbar />
      <RecipeDetails />
      <Footer data={props.footerData}/>
    </div>
  )
}
