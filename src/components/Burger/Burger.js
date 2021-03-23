import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)    //Object.keys() converti un objet js en tableau
    .map(ingredKey => {  
        return [...Array(props.ingredients[ingredKey])].map((_, index) => {  //utilisation de spread pour répandre un nouveal array que je dois construire avec la méthode Array()
        return <BurgerIngredient key={ingredKey + index} type={ingredKey} />;   //je définie la clé parce que je suis dans un array et avec + 1 je créé une unique clé
      });     
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Commencez à choisir un ingrédient!</p>
    }  
    console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients} 
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
  
}


export default burger;