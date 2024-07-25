import "bootstrap/dist/css/bootstrap.min.css";
import DailyRequiredIntake from "./components/DailyRequiredIntake";
import CurrentWeight from "./components/CurrentWeight";
import { useState } from "react";
import FoodConsumption from "./components/FoodConsumption";
import DailyFoodConsumptionList from "./components/DailyFoodConsumptionList";

function App() {
  const [weightDataFromCurrentWeightComp, setWeightDataFromCurrentWeightComp] =
    useState("");

  const [foodItemFromFoodConsumption, setFoodItemFromFoodConsumption] =
    useState("");

  function foodItemToApp(foodItemData) {
    setFoodItemFromFoodConsumption(foodItemData);
    console.log(foodItemData);
  }

  function currentWeightToApp(currentWeightData) {
    setWeightDataFromCurrentWeightComp(currentWeightData);
  }

  return (
    <>
      <DailyRequiredIntake currentWeight={weightDataFromCurrentWeightComp} />
      <CurrentWeight childToParent={currentWeightToApp} />
      <br></br>
      <FoodConsumption childToParent={foodItemToApp} />
      <DailyFoodConsumptionList />
      <p>{JSON.stringify(foodItemFromFoodConsumption)}</p>
    </>
  );
}

export default App;

//comments
//weightDataFromCurrentWeightComp is coming from CurrentWeight component, then lifted to App, which I will be passing to the DailyRequiredIntake component
