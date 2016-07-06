import React from 'react'

function Comment(props) {
  const {comment: {user, text}} = props;

  return (
    <div>
      <span>{user}</span>
      <p>{text}</p>
    </div>
  )
}

export default Comment;