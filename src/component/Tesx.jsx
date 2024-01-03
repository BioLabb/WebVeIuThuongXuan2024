// Popup Component
import React from "react";
import "../style/test.css"; // File CSS của popup

function Popup({ handleClose, show }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose}>Close</button>
        <p>Popup content here</p>
      </section>
    </div>
  );
}

export default Popup;
