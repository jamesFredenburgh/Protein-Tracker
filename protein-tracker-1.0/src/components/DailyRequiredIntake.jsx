import ProgressBar from "react-bootstrap/ProgressBar";

function DailyRequiredIntake(props) {
  const now = 69;
  return (
    <>
      <h1>
        You need to eat this much protein: {props.currentWeight} grams today
      </h1>
      <h1>You need 100g more!</h1>

      <ProgressBar now={now} label={`${now}%`} />
    </>
  );
}

export default DailyRequiredIntake;
