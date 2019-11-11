import React, { Fragment } from "react";
import { List, CommentAvatar, Comment, Divider } from "semantic-ui-react";
import { format } from "date-fns";
const Comments = ({ comments }) => {
  console.log(comments[0]);
  return (
    <Comment.Group>
      {comments.map((comment, i) => (
        <Comment key={i}>
          <CommentAvatar
            src={comment.author.picture}
            alt={comment.author.name}
          />
          <Comment.Content>
            <Comment.Author as="h4" style={{ margin: 0 }}>
              {comment.author.name}
            </Comment.Author>
            <Comment.Metadata>
              <div>{format(new Date(comment.createdAt), "MMM, do, yyyy")}</div>
            </Comment.Metadata>
            <Comment.Text>{comment.text}</Comment.Text>
          </Comment.Content>
          <Divider />
        </Comment>
      ))}
    </Comment.Group>
  );
};

export default Comments;
