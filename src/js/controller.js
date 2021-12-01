import * as model from "./model.js";

import icons from "url:../img/icons.svg";

import { recipeView } from "./view/recipeView";


const recipeContainer = document.querySelector('.recipe');



const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipe = async () => {

  const id = window.location.hash.slice(1);
  console.log(id);




  try {


// loading spinner
    recipeView.renderSpiner();



    //loading recipe
    await model.loadRecipe(id);

    console.log("model.state.recipe", model.state.recipe);

    const { recipe } = model.state;

    recipeView.render(model.state.recipe);



  } catch (error) {
    console.log(error)
  }



};


["hashchange", "load"].forEach((ev) => {
  window.addEventListener(ev, showRecipe);
})

//window.addEventListener("hashchange", showRecipe);
//window.onhashchange = showRecipe;
//window.addEventListener("load", showRecipe);
//window.onload = showRecipe;
