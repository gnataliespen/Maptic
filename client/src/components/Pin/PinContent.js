import React from "react";
import { Image, Icon, Segment } from "semantic-ui-react";
import { format } from "date-fns";

import CreateComment from "../Comment/CreateComment";
import Comments from "../Comment/Comments";

const PinContent = ({ pin, createComment, openModal }) => {
  const { title, description, author, createdAt, comments, image } = pin;

  return (
    <div className="pin-content">
      {image && (
        <Image src={image} rounded centered size="small" onClick={openModal} />
      )}
      <h2 className="pin-heading">{title}</h2>
      <h3 className="pin-heading">
        <Icon name="user" />
        {author ? author.name : "Anonymous"}
      </h3>
      <h4 className="pin-heading">
        <Icon name="clock" /> {format(new Date(createdAt), "MMM, do, yyyy")}
      </h4>
      {description && <p>{description}</p>}
      <Segment>
        <CreateComment handleCreate={createComment} openModal={openModal} />
        <Comments comments={comments} openModal={openModal} />
      </Segment>
    </div>
  );
};
export default PinContent;
