import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBoardState, selectButton } from '../actions'

class Landing extends Component {
  boardSize = _.range(8);

  componentDidMount() {
    this.props.setBoardState(this.boardSize);
  }

  renderButtons() {
    return _.map(this.props.boardStatus, button => {
      return (
        <div key={button.id} className="backboard">
          <div onClick={()=> this.props.selectButton(button.id)} className={`switch ${button.status}`}>
            <p>{button.text}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>SwitchBoard</h1>
        {this.renderButtons()}
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    boardStatus: state.boardStatus
  };
}

export default connect (mapStateToProps, { setBoardState, selectButton })(Landing);