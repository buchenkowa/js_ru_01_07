import React, {PropTypes} from 'react'

function Comment(props) {
  const {comment: {user, text}} = props;

  if (!props.comment) return <h3>no Comments</h3>;
  return (
    <div>
      <span>{user}</span>
      <p>{text}</p>
    </div>
  )
}

Comment.propTypes = {
 comment: PropTypes.shape({
   text: PropTypes.string.isRequired,
   user: PropTypes.string
 })
}

export default Comment;