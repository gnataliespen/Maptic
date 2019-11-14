import React, { useContext } from "react";
import useMedia from "use-media";
import { useAlert } from "react-alert";

import Context from "../../state/context";
import CreatePin from "../Pin/CreatePin";
import { Sidebar, Icon, Button } from "semantic-ui-react";
import PinContent from "../Pin/PinContent";
import { CLEAR_PIN, CLEAR_DRAFT, DELETE_PIN } from "../../state/types";
import api from "../../util/apiConnection";

const Blog = ({ createPin, deletePin, createComment }) => {
  const { state, dispatch } = useContext(Context);
  const { draft, currentPin, currentUser } = state;
  const alert = useAlert();
  //Change side bar to be on top for mobile users
  const mobile = useMedia({ maxWidth: 650 }) ? "top" : "right";

  //Blog content should only show if a pin is selected
  let visibility = !draft && !currentPin ? false : true;

  const clearPinState = () => {
    //Check which state to clear
    !draft && currentPin
      ? dispatch({ type: CLEAR_PIN })
      : dispatch({ type: CLEAR_DRAFT });
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/pins/delete/${currentPin._id}`);
      dispatch({ type: DELETE_PIN, payload: currentPin._id });
      alert.show("Deleted pin", { type: "success" });
    } catch (err) {
      alert.show("Failed to delete pin", { type: "error" });
    }
  };

  return (
    <Sidebar
      visible={visibility}
      className="blog"
      animation="overlay"
      direction={mobile}
      width="wide"
    >
      <div className="blog-btns">
        <Button className="close" onClick={clearPinState}>
          <Icon name="remove circle" />
        </Button>
        {currentUser &&
          currentPin &&
          currentPin.author &&
          currentUser._id === currentPin.author._id && (
            <Button
              color="red"
              className="delete"
              onClick={() => deletePin(currentPin._id)}
            >
              Delete Pin
            </Button>
          )}
      </div>

      {!draft && currentPin ? (
        <PinContent pin={currentPin} createComment={createComment} />
      ) : (
        <CreatePin handleCreate={createPin} />
      )}
    </Sidebar>
  );
};
export default Blog;
