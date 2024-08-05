import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function FoodConsumption({ onAddFoodItem }) {
  const [show, setShow] = useState(false);
  const [foodItem, setFoodItem] = useState("");
  const [proteinContent, setProteinContent] = useState("");
  const [servings, setServings] = useState("");

  const handleClose = () => setShow(false);

  function submitHandler() {
    console.log("Submitted");
    setShow(false);
    const newFoodItem = {
      foodItem: foodItem,
      proteinContent: proteinContent,
      servings: servings,
    };
    console.log(newFoodItem);
    onAddFoodItem(newFoodItem);
  }

  function addFoodItemHandler() {
    setShow(true);
    setFoodItem("");
    setProteinContent("");
    setServings("");
  }

  function foodHandler(event) {
    setFoodItem(event.target.value);
  }

  function proteinContentHandler(event) {
    setProteinContent(event.target.value);
  }

  function servingsHandler(event) {
    setServings(event.target.value);
  }

  return (
    <>
      <Button variant="primary" onClick={addFoodItemHandler}>
        Add item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>What did you eat?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <ol>
              <li>
                <label>What did you eat?</label>
                <input
                  type="text"
                  value={foodItem}
                  onChange={foodHandler}
                ></input>
              </li>
              <li>
                <label>How many grams of protein?</label>
                <input
                  type="text"
                  value={proteinContent}
                  onChange={proteinContentHandler}
                ></input>
              </li>
              <li>
                <label>How many servings?</label>
                <input
                  type="text"
                  value={servings}
                  onChange={servingsHandler}
                ></input>
              </li>
            </ol>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitHandler}>
            Add item
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FoodConsumption;
