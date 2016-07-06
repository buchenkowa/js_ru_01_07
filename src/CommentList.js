import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    const
      {comments} = this.props,
      {isOpen} = this.state,
      linkText = comments && (isOpen ? 'Hide comments' : 'See comments'),
      commentItems = comments && isOpen && comments.map((comment) => <li key = {comment.id}><Comment comment= {comment} /></li>);

    return (
      <div>
        <p onClick = {this.toggleOpen}>{linkText}</p>
        <ul> {commentItems} </ul>
      </div>
    )
  }
  toggleOpen = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default CommentList;