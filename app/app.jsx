var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');
var { Route, Router, IndexRoute, browserHistory } = require('react-router')
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import MyApp from 'MyApp';
import Recipes from 'Recipes';
import AdRecipe from 'AdRecipe';
import Information from 'Information';
import megalitheAdmin from 'reducers'
import { render } from 'react-dom';
import { Provider } from 'react-redux';


// App css
require('style!css!sass!applicationStyles')

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
//
let store = createStoreWithMiddleware(megalitheAdmin, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
))

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MyApp}>
        <Route path="/recettes" component={Recipes} />
        <Route path="/ajouter_recette" component={AdRecipe}/>
        <Route path="/information" component={Information} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
