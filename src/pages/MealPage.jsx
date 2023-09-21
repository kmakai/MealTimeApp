import { useLoaderData } from "react-router-dom";
import { getMealById } from "../fetchers";

export async function loader({ request }) {
  const url = new URL(request.url);
  const mealId = url.pathname.split("/")[2];
  const meal = await getMealById(mealId);
  return { meal };
}

const MealPage = () => {
  const { meal } = useLoaderData();
  return (
    <div className="flex-1 flex flex-col gap-4 p-4">
      <div className="flex flex-wrap gap-10">
        <div className="flex flex-col gap-4">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="max-h-[500px] rounded"
          />
          <span className="text-blue-800">
            Source link:
            <br />
            <a href={meal.strSource}>{meal.strSource}</a>
          </span>

          <span className="text-blue-800">
            Video link:
            <br />
            <a href={meal.strYoutube}>{meal.strYoutube}</a>
          </span>
        </div>

        <div className="flex-1 flex flex-col gap-2 justify-between">
          <h1 className="font-bold text-2xl">{meal.strMeal}</h1>
          <h2 className="font-bold text-lg text-slate-700">Ingredients</h2>
          <ul className="flex flex-col max-w-[500px]">
            {getIngredients(meal).map((ingredient) => ingredient)}
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="font-bold text-lg text-slate-700">Instructions</h2>
            {meal.strInstructions.split(".").map((s, i) => (
              <p key={i}>{s}.</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function getIngredients(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        <li key={i} className="flex gap-10 justify-between font-semibold">
          <span className="capitalize">{meal[`strIngredient${i}`]}</span>
          <span>{meal[`strMeasure${i}`]}</span>
        </li>
      );
    }
  }
  return ingredients;
}

export default MealPage;
