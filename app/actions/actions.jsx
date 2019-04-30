import axios from 'axios';

const BASE_URL = 'http://localhost:3443/'

// RECIPES 
export const FETCHING_RECIPE = 'FETCHING_RECIPE';
export const SEND_DATA_RECIPE = 'SEND_DATA_RECIPE';

//RECIPE'S INGREDIENTS
export const FETCHING_RECIPE_INGREDIENTS = 'FETCHING_RECIPE_INGREDIENTS';
export const SEND_DATA_RECIPE_INGREDIENT = 'SEND_DATA_RECIPE_INGREDIENT';
export const RESET_RECIPE_INGREDIENT = 'RESET_RECIPE_INGREDIENT'


//RECIPES

let fetchingRecipe = () => {
  return {
    type: FETCHING_RECIPE
  }
}

let sendDataRecipe = (recipe) => {
  return {
    type: SEND_DATA_RECIPE,
    recipe
  }
}

export function testAction() {
  return dispatch => {
    dispatch(fetchingRecipe())
    let config = {
      body:{},
      headers: {'Access-Control-Allow-Origin': '*'}
    }
    axios.get(`${BASE_URL}recipes`, config.body, config.headers)
    .then(response => {
      dispatch(sendDataRecipe(response.data))
    })
  }
}

// GET RECIPE'S INGREDIENTS
let fetchingRecipeIngredients = () => {
  return {
    type: FETCHING_RECIPE_INGREDIENTS
  }
}

let sendDataRecipeIngredients = (recipe) => {
  return {
    type: SEND_DATA_RECIPE_INGREDIENT,
    recipe
  }
}

export let resetRecipeIngredient = () => {
  return {
    type: RESET_RECIPE_INGREDIENT
  }
}


export function getRecipeIngredient(id) {
  return dispatch => {
    dispatch(fetchingRecipeIngredients())
    let config = {
      body:{},
      headers: {'Access-Control-Allow-Origin': '*'}
    }
    axios.get(`${BASE_URL}recipe/${id}`, config.body, config.headers)
    .then(response => {
      dispatch(sendDataRecipeIngredients(response.data))
    })
  }
}


//POST NEW RECIPE
export function addRecipe(data) {
  return dispatch => {
    dispatch(fetchingRecipeIngredients())
    let config = {
      body:data,
      headers: {'Access-Control-Allow-Origin': '*'}
    }
    axios.post(`${BASE_URL}recipe/add`, config.body, config.headers)
    .then(response => {
      console.log(response);
      
      dispatch(sendDataRecipeIngredients(response.data))
    })
  }
}