import React, { Component } from 'react';
import { resetRecipeIngredient } from 'actions';

export default class RecipeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeIngredients: []
    };

    this.renderListRecipeIngredients = this.renderListRecipeIngredients.bind(this)
  }

  componentWillReceiveProps(nextProps) {

  }
  componentWillUnmount() {
    this.props.dispatch(resetRecipeIngredient())
  }

  render() {
    const { recipeIngredientsList } = this.props;
    return (
      <div className="listIngredients">
        {this.renderListRecipeIngredients(recipeIngredientsList)}
        <button onClick={() => this.props.dispatch(resetRecipeIngredient())}>retour au menu</button>
      </div>
    )
  }

  renderListRecipeIngredients(recipeIngredients) {
    return recipeIngredients.map((ingredient, i) => {
      return (
        <div className="text-center">
          <p>{ingredient.quantity} {ingredient.name}</p>
        </div>
      )
    })
  }
}