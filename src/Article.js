import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const
      {article: {title, text, comments}, isOpen, openArticle} = this.props,
      body = isOpen && <section>{text}<CommentList comments = {comments} /></section>;

    return (
      <div>
        <h1 onClick = {openArticle} ref='toggler'>{title}</h1>
        {body}
      </div>
    )
  }
}

export default Article;