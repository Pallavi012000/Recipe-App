import React from 'react';
import style from "./recipe.module.css";

const Recipe =({title,calories, image, ingredients}) =>{

    return(
        <div className={style.recipez}>
            <h1 >{title}</h1>
            <ul>
                {ingredients.map(ing =>(
                    <li key={ing}>{ing.text}</li>
                ))}
            </ul>
            <p><b>Calories :</b> {calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
        
    );
}

export default Recipe;