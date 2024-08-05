import "bootstrap/dist/css/bootstrap.min.css";
import DailyRequiredIntake from "./components/DailyRequiredIntake";
import CurrentWeight from "./components/CurrentWeight";
import { useState } from "react";
import FoodConsumption from "./components/FoodConsumption";
import DailyFoodConsumptionList from "./components/DailyFoodConsumptionList";

function App() {
  const [weightDataFromCurrentWeightComp, setWeightDataFromCurrentWeightComp] =
    useState("");

  const [consumedFoodList, setConsumedFoodList] = useState([]);

  function foodItemToApp(foodItemData) {
    setConsumedFoodList((consumedFoodList) => [
      ...consumedFoodList,
      foodItemData,
    ]);

    // localStorage.setItem("foodEatenToday", consumedFoodList);
  }

  console.log(consumedFoodList);

  function currentWeightToApp(currentWeightData) {
    setWeightDataFromCurrentWeightComp(currentWeightData);
  }

  function handleDelete(index) {
    setConsumedFoodList(consumedFoodList.filter((_, i) => i !== index));
  }

  return (
    <>
      <DailyRequiredIntake
        consumedFoodData={consumedFoodList}
        currentWeight={weightDataFromCurrentWeightComp}
      />
      <CurrentWeight childToParent={currentWeightToApp} />
      <br></br>
      <FoodConsumption onAddFoodItem={foodItemToApp} />
      <DailyFoodConsumptionList
        consumedFoodData={consumedFoodList}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;

//comments
//weightDataFromCurrentWeightComp is coming from CurrentWeight component, then lifted to App, which I will be passing to the DailyRequiredIntake component
