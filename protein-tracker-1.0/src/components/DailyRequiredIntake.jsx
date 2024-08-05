import ProgressBar from "react-bootstrap/ProgressBar";

function DailyRequiredIntake({ consumedFoodData }) {
  const consumedFoodList = [...consumedFoodData];

  let totalProteinEaten = 0;

  consumedFoodList.forEach((item) => {
    totalProteinEaten +=
      parseInt(item.proteinContent) * parseInt(item.servings);
  });

  let remainingProteinNeeded = `${
    localStorage.getItem("currentWeight") - totalProteinEaten
  }`;

  let percentageBar = Math.round(
    (totalProteinEaten / localStorage.getItem("currentWeight")) * 100
  );

  return (
    <>
      <h1>
        You need to eat this much protein:{" "}
        {localStorage.getItem("currentWeight")} grams today
      </h1>
      <h1>You've eaten {totalProteinEaten} grams of protein today</h1>
      <h1>You need {remainingProteinNeeded} grams more!</h1>
      <ProgressBar now={percentageBar} label={`${percentageBar}%`} />
    </>
  );
}

export default DailyRequiredIntake;
