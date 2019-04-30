import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from 'actions';

class AdRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipeName: "",
      recipePicture: ""
    };

    this.newRecipe = this.newRecipe.bind(this);
  }
  render() {

    return (
      <div className="row">
        <label>Titre de la recette :
          <input ref="recipeName" value={this.state.recipeName} onChange={() => this.setState({ recipeName: this.refs.recipeName.value })} type="text" />
        </label>
        <label>Image de la recette :
          <input ref="recipePicture" value={this.state.recipePicture} onChange={() => this.setState({ recipePicture: this.refs.recipePicture.value })} type="text" />
        </label>

        <button onClick={() => this.newRecipe()}>Valider</button>
      </div>
    )
  }

  newRecipe() {

    this.props.dispatch(addRecipe(this.state))
  }

}

function mapStateToProps(state) {
};

export default connect(mapStateToProps)(AdRecipe);