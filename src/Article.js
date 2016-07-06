import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    const
      {article: {title, text, comments}} = this.props,
      {isOpen} = this.state,
      body = isOpen && <section>{text}<CommentList comments = {comments} /></section>;

    return (
      <div>
        <h1 onClick = {this.toggleOpen}>{title}</h1>
        {body}
      </div>
    )
  }

  toggleOpen = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article;