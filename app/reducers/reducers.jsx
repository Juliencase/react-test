import { combineReducers } from 'redux';

import { FETCHING_RECIPE, SEND_DATA_RECIPE } from 'actions';
import { FETCHING_RECIPE_INGREDIENTS, SEND_DATA_RECIPE_INGREDIENT,RESET_RECIPE_INGREDIENT } from '../actions/actions';


export function auth(state = {
  isFetching: false,
  isAuthenticated: false,
  admin: false,
  token: null
}, action) {
  switch (action.type) {
    default:
      return state
  };
};

export function recipe(state = {
  isRecipeFetching: false,
  recipeList: []
}, action) {
  switch (action.type) {
    case FETCHING_RECIPE:
      return Object.assign({}, state, {
        isRecipeFetching: true
      })
    case SEND_DATA_RECIPE:
      return Object.assign({}, state, {
        isRecipeFetching: false,
        recipeList: action.recipe
      })
    default:
      return state;
  }
}

export function recipeIngredients(state = {
  isRecipeIngredientsFetching: false,
  recipeIngredientsList: []
}, action) {
  switch (action.type) {
    case FETCHING_RECIPE_INGREDIENTS:
      return Object.assign({}, state, {
        isRecipeIngredientsFetching: true
      })
    case SEND_DATA_RECIPE_INGREDIENT:
      return Object.assign({}, state, {
        isRecipeIngredientsFetching: false,
        recipeIngredientsList: action.recipe
      })
    case RESET_RECIPE_INGREDIENT:
      return Object.assign({}, state, {
        recipeIngredientsList: []
      })
    default:
      return state;
  }
}



const myApp = combineReducers({
  auth,
  recipe,
  recipeIngredients
});

export default myApp;
