import { useState } from "react";
import Button from "react-bootstrap/Button";

function CurrentWeight(props) {
  const [weightValue, setWeightValue] = useState(null);

  function submitWeightHandler(event) {
    setWeightValue(event.target.value);
  }

  return (
    <form>
      <input
        type="number"
        placeholder="Current Weight"
        onChange={submitWeightHandler}
      />
      <Button onClick={() => props.childToParent(weightValue)}>SAVE</Button>
    </form>
  );
}

export default CurrentWeight;
