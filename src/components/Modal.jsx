import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/modal.css";
import { faCross } from "@fortawesome/free-solid-svg-icons";
const Modal = ({ isModalOpen, setIsModalOpen, modalData }) => {
  console.log(modalData);
  return (
    <div className={isModalOpen ? "modal-main" : ""}>
      <div className={`modal-container ${isModalOpen ? "modal-scale" : ""}`}>
        <div
          className="cancel-modal"
          onClick={() => {
            setIsModalOpen(false);
          }}>
         <FontAwesomeIcon icon={faCross}/>
        </div>

        <div
          className="content-modal container"
          style={{
            backgroundImage: `url(${modalData})`,
          }}>
          <div className="row modal-prev">
            <div className="col-sm-12 ">
              <a href="/">Visit</a>
              <a href="/">github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
