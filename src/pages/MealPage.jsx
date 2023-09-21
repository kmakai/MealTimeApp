import { useLoaderData } from "react-router-dom";
import { getMealById, getMealsByCategory } from "../fetchers";

export async function loader({ request }) {
  const url = new URL(request.url);
  const mealId = url.pathname.split("/")[2];
  const meal = await getMealById(mealId);
  const categories = await getMealsByCategory(meal.strCategory);
  console.log(categories);
  console.log(meal);
  return { meal };
}

const MealPage = () => {
  const { meal } = useLoaderData();
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col gap-4 p-4">
        <div className="flex flex-wrap gap-10">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="max-h-[400px] rounded"
          />
          <div className="flex-1 flex flex-col">
            <h1 className="font-bold text-lg">{meal.strMeal}</h1>
            <ul className="flex flex-col max-w-[500px]">
              {getIngredients(meal).map((ingredient) => ingredient)}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Instructions</h2>
          {meal.strInstructions.split(".").map((s, i) => (
            <p key={i}>{s}.</p>
          ))}
        </div>
      </div>
      <div className="w-[40%]"></div>
    </div>
  );
};

function getIngredients(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        <li key={i} className="flex justify-between">
          <span className="capitalize">{meal[`strIngredient${i}`]}</span>
          <span>{meal[`strMeasure${i}`]}</span>
        </li>
      );
    }
  }
  return ingredients;
}

export default MealPage;
