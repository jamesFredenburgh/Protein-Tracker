import "bootstrap/dist/css/bootstrap.min.css";
import DailyRequiredIntake from "./components/DailyRequiredIntake";
import CurrentWeight from "./components/CurrentWeight";
import { useState, useEffect } from "react";
import FoodConsumption from "./components/FoodConsumption";
import DailyFoodConsumptionList from "./components/DailyFoodConsumptionList";

function App() {
  const [weightDataFromCurrentWeightComp, setWeightDataFromCurrentWeightComp] =
    useState("");

  const [consumedFoodList, setConsumedFoodList] = useState([]);

  useEffect(() => {
    const savedFoodList = localStorage.getItem("foodEatenToday");
    if (savedFoodList) {
      setConsumedFoodList(JSON.parse(savedFoodList));
    }
  }, []);

  useEffect(() => {
    const savedWeight = localStorage.getItem("currentWeight");
    if (savedWeight) {
      setWeightDataFromCurrentWeightComp(savedWeight);
    }
  });

  function foodItemToApp(foodItemData) {
    setConsumedFoodList((consumedFoodList) => {
      const updatedList = [...consumedFoodList, foodItemData];
      localStorage.setItem("foodEatenToday", JSON.stringify(updatedList));
      return updatedList;
    });
  }

  console.log(consumedFoodList);

  function currentWeightToApp(weightValue) {
    setWeightDataFromCurrentWeightComp(weightValue);
    console.log("This is the weight value:", weightValue);
    console.log(
      "This is the current weight saved in LS:",
      localStorage.getItem("currentWeight")
    );
  }

  function handleDelete(index) {
    setConsumedFoodList((prevList) => {
      const updatedList = prevList.filter((_, i) => i !== index);
      localStorage.setItem("foodEatenToday", JSON.stringify(updatedList));
      return updatedList;
    });
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
