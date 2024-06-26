import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, nameUse] = useState('')
  const [commentMsg, message] = useState('')
  const [commentsList, commList] = useState([])

  const onName = event => nameUse(event.target.value)
  const onMsgin = event => message(event.target.value)
  const noFormsubmit = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentMsg,
    }
    commList(previouscommList => [...previouscommList, newComment])

    nameUse('')
    message('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={noFormsubmit}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentMsg}
          onChange={onMsgin}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>

      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem key={eachComment.id} commentDetails={eachComment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
