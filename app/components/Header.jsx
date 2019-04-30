import React, { Component } from 'react';
var { browserHistory } = require('react-router');

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
        };
        this.toggleView = this.toggleView.bind(this);
    }
    render() {

        return (
            <nav>
                <ul>
                    <li><a onClick={() => this.toggleView('/', 0)}>
                        <img src="https://i1.wp.com/thevillage.fr/wp-content/uploads/2016/08/icone-experience.png"></img>
                    </a></li>
                    <li><a className={this.state.toggle === 1 ? 'active' : ''} onClick={() => this.toggleView('/recettes', 1)}>Recettes</a></li>
                    <li><a className={this.state.toggle === 2 ? 'active' : ''} onClick={() => this.toggleView('/ajouter_recette', 2)}>Ajouter une recette</a></li>
                    <li><a className={this.state.toggle === 3 ? 'active' : ''} onClick={() => this.toggleView('/information', 3)}>Information</a></li>
                    <li class="" style={{ float: 'right' }}><a className={this.state.toggle === 4 ? 'active' : ''} onClick={() => this.toggleView('/information', 4)}>A propos</a></li>
                </ul>
            </nav>
        )

    }

    toggleView(view, toggle) {
        browserHistory.push(view)
        this.setState({ toggle })
    }
}