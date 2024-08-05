import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CurrentWeight({ childToParent }) {
  const [weightValue, setWeightValue] = useState(null);
  const [showWeightModal, setShowWeightModal] = useState(false);

  function inputWeightHandler(event) {
    setWeightValue(event.target.value);
  }

  function submitWeightHandler(weightValue) {
    localStorage.setItem("currentWeight", weightValue);
    setShowWeightModal(!showWeightModal);
  }

  function showWeightModalHandler() {
    setShowWeightModal(!showWeightModal);
  }

  return (
    <>
      <Button onClick={showWeightModalHandler}>Change Weight</Button>
      {showWeightModal ? (
        <Modal show={showWeightModal}>
          <Modal.Header>
            <Modal.Title>What is your current weight?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input
                type="number"
                placeholder="Current Weight"
                onChange={inputWeightHandler}
                // value={}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => submitWeightHandler(weightValue)}>
              Save
            </Button>
            <Button>Cancel</Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
}

export default CurrentWeight;
