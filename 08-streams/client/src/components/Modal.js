import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui strandard modal visible active">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia earum
        perferendis, quam magni numquam veniam minus? Distinctio numquam minima
        deserunt.
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
