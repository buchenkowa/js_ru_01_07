export default {
  getInitialState() {
    return {
      openArticleId: false
    }
  },

  openArticle(id) {
    return function(ev) {
      this.setState({
        openArticleId: id !== this.state.openArticleId && id
      })
    }.bind(this)
  }
}