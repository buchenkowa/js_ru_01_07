import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../AC/counter'

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func
  };

  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <a href = '#' onClick = {this.hundleIncrement}>increment</a>
      </div>
    )
  }

  hundleIncrement = (ev) => {
    ev.preventDefault();
    this.props.increment();
    console.log('-----', 'incrementing');
  }
}

export default connect((state) => {
  const {count} = state;
  return {count}
}, {
  increment
})(Counter)