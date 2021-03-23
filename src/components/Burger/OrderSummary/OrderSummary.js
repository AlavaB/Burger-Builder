import React from 'react';

import Aux from '../../../hoc/Auxi';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      ) 
    })
  return (
    <Aux>
      <h3>Votre commande</h3>
      <p>Un délicieux burger avec les ingrédients suivants : </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Voulez-vous continuer ? </p>
    </Aux>
  )
}

export default orderSummary;