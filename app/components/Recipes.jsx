import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction, getRecipeIngredient } from 'actions';
import RecipeComponent from 'RecipeComponent';


class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };

    this.renderListRecipe = this.renderListRecipe.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(testAction())
  }



  render() {
    const { isRecipeFetching, dispatch, recipeList, isRecipeIngredientsFetching, recipeIngredientsList } = this.props;
    return (
      <div className="row">
        {recipeIngredientsList && recipeIngredientsList.length
          ?
          <RecipeComponent
            isRecipeIngredientsFetching={isRecipeIngredientsFetching}
            recipeIngredientsList={recipeIngredientsList}
            dispatch={dispatch}
          />
          :

          this.renderListRecipe(recipeList)
        }
      </div>
    )
  }

  renderListRecipe(recipes) {
    return recipes.map((recipe, i) => {
      return (
        <div className="card">
          <img src={recipe.picture} alt="image de cette recette" />
          <div className="container">
            <h4>{recipe.name}</h4>
          </div>
          <button className="toRecipeIngredient" onClick={() => this.props.dispatch(getRecipeIngredient(recipe.id))} className>Voir la recette</button>
        </div>
      )
    })
  }

}


function mapStateToProps(state) {
  const { recipe, recipeIngredients } = state
  const { isRecipeIngredientsFetching, recipeIngredientsList } = recipeIngredients
  const { isRecipeFetching, recipeList } = recipe

  return {
    isRecipeFetching,
    recipeList,
    isRecipeIngredientsFetching,
    recipeIngredientsList
  }
};
export default connect(mapStateToProps)(Recipes);
