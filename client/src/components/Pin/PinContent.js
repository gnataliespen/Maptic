import React, { useContext } from "react";
import Context from "../../state/context";
import { Image, Icon } from "semantic-ui-react";
import { format } from "date-fns";
import CreateComment from "../Comment/CreateComment";

const PinContent = () => {
  const { state } = useContext(Context);
  const {
    title,
    description,
    author,
    createdAt,
    comments,
    image,
  } = state.currentPin;
  const date = new Date(createdAt);
  return (
    <div className="pin-content">
      {image && <Image src={image} rounded centered size="small" />}
      <h2 className="pin-heading">{title}</h2>
      <h3 className="pin-heading">
        <Icon name="user" />
        {author ? author.name : "Anonymous"}
      </h3>
      <h4 className="pin-heading">
        <Icon name="clock" /> {format(date, "MMM, do, yyyy")}
      </h4>
      {description && <p>{description}</p>}
      <CreateComment />
    </div>
  );
};
export default PinContent;
