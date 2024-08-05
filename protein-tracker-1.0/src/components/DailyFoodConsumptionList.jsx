import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function DailyFoodConsumptionList({ consumedFoodData, onDelete }) {
  // const dailyFoodConsumptionList = [...props.consumedFoodData];
  // const [dailyFoodConsumptionList, setDailyFoodConsumptionList] = useState([
  //   ...props.consumedFoodData,
  // ]);

  return (
    <ul>
      {consumedFoodData.map((item, index) => (
        <li key={index}>
          <Card>
            <Card.Body>
              {`${item.servings} ${
                item.servings > 1 ? "servings" : "serving"
              } of ${item.foodItem.toLowerCase()} - ${
                parseInt(item.proteinContent) * parseInt(item.servings)
              } ${
                parseInt(item.proteinContent) * parseInt(item.servings) > 1
                  ? "grams"
                  : "gram"
              } of protein`}
              <Button variant="danger" onClick={() => onDelete(index)}>
                X
              </Button>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default DailyFoodConsumptionList;

//is there a cleaner way to wrtie the Card.Body out? Can I turn } of ${item.foodItem.toLowerCase()} - ${
//   parseInt(item.proteinContent) * parseInt(item.servings)
// } ${
//   parseInt(item.proteinContent) * parseInt(item.servings) > 1
//     ? "grams"
//     : "gram"
// } of protein`}
//into any variables?
//-------

//I need to add a delete item button, is that here or in food consumption?//I think it's here
