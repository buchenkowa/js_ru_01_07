import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggleOpen = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return <Component {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen} />
  }
}