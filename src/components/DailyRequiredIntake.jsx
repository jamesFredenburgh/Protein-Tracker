import ProgressBar from "react-bootstrap/ProgressBar";
import styles from "../styles.module.css";

function DailyRequiredIntake({ consumedFoodData, currentWeight }) {
  const consumedFoodList = [...consumedFoodData];

  let totalProteinEaten = 0;

  consumedFoodList.forEach((item) => {
    totalProteinEaten +=
      parseInt(item.proteinContent) * parseInt(item.servings);
  });

  let remainingProteinNeeded = `${currentWeight - totalProteinEaten}`;

  let percentageBar = Math.round((totalProteinEaten / currentWeight) * 100);

  return (
    <>
      <h1>Daily required intake: {currentWeight} grams per day</h1>
      <h1>Total consumed today: {totalProteinEaten} grams</h1>
      <h1>Total remaining: {remainingProteinNeeded} grams</h1>
      <ProgressBar
        className={styles.ProgressBar}
        now={percentageBar}
        label={`${percentageBar}%`}
      />
    </>
  );
}

export default DailyRequiredIntake;
