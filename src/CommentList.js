import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from './decorators/toggleOpen'

class CommentList extends Component {
  render() {
    const
      {comments, isOpen, toggleOpen} = this.props,
      linkText = comments && (isOpen ? 'Hide comments' : 'See comments'),
      commentItems = comments && isOpen && comments.map((comment) => <li key = {comment.id}><Comment comment= {comment} /></li>);

    return (
      <div>
        <p onClick = {toggleOpen} ref='toggler'>{linkText}</p>
        <ul> {commentItems} </ul>
      </div>
    )
  }
}

export default toggleOpen(CommentList);
