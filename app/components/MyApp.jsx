import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from 'Header';

class MyApp extends Component {
  constructor() {
    super();
    this.state = {};

  }
  render () {

    return (
      <div>
        <Header/>
        {this.props.children }
      </div>
    )
  }


}


function mapStateToProps(state) {
};

export default connect(mapStateToProps) (MyApp);
