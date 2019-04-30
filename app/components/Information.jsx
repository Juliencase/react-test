import React, {Component} from 'react';
import {connect} from 'react-redux';

class Information extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render () {

    return (
      <div>
        
      </div>
    )
  }

}

function mapStateToProps(state) {
};

export default connect(mapStateToProps) (Information);