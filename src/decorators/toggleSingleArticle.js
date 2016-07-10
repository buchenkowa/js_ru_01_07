import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openArticleId: null
    }
  }

  openArticle = id => ev => {
    this.setState({
      openArticleId: id !== this.state.openArticleId && id
    })
  }

  render() {
    return <Component {...this.props} openArticleId = {this.state.openArticleId} openArticle = {this.openArticle} />
  }
}
