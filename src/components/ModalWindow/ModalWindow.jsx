import "./ModalWindow.scss";
import ModalWrapper from "../Modal/ModalWrapper/ModalWrapper";
import Modal from "../Modal/Modal";
import ModalHeader from "../Modal/ModalHeader/ModalHeader";
import ModalBody from "../Modal/ModalBody/ModalBody";
import ModalFooter from "../Modal/ModalFooter/ModalFooter";
import CloseBtn from "../Buttons/CloseBtn/CloseBtn";

function ModalText({ onClick, data, firstClick, secondClick, onClose, firstText, secondText, deleteFrom }) {
  return (
    <ModalWrapper onClick={onClick} >
      <Modal>
        <CloseBtn onClose={onClose} />
        <ModalHeader>
          <h2>{data.title}</h2>
        </ModalHeader>
        <ModalBody>
          {secondText && (
            <>
            <img className="modal-img" src={data.image} alt={data.title} width="200"/>
              <h3 >Delete from {deleteFrom}?</h3>
              <p>By clicking the “Yes, Delete” button, {data.title} will be deleted.</p>
            </>
          )}

          {firstText && (
            <>

              <p>{data.description}</p>
            </>
          )}
        </ModalBody>
        <ModalFooter
          firstText={firstText}
          secondaryText={secondText}
          
          firstClick={firstClick}
          secondaryClick={secondClick}
        />
      </Modal>
    </ModalWrapper>
  );
}

export default ModalText;