import React from 'react'
import Article from './Article'
import toggleSingleArticle from './mixins/toggleSingleArticle'

const ArticleList = React.createClass({
  mixins: [toggleSingleArticle],

  render() {
    const
      {articles} = this.props,
      {openArticleId} = this.state,
      listItems = articles.map((article) => <li key={article.id}>
        <Article article = {article}
         isOpen = {article.id == openArticleId}
         openArticle = {this.openArticle(article.id)}
        />
      </li>)

  return (
    <div>
    <h1>Article list</h1>
    <ul> {listItems} </ul>
    </div>
  )
  }
})

export default ArticleList
