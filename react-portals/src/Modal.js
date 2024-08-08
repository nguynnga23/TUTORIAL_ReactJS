import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ onClose, children, actions }) => {
  const handleClick = (e) => e.stopPropagation();
  return ReactDOM.createPortal(
    <div className="modal-container" onClick={onClose}>
      <div className="modal" onClick={handleClick}>
        {children}
        {actions}
      </div>
    </div>,
    document.querySelector(".modal-wrapper")
  );
};

export default Modal;
