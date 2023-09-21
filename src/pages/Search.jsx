import { Link, useLoaderData } from "react-router-dom";
import { getMealsByCategory } from "../fetchers";

export async function loader({ request }) {
  const url = new URL(request.url);
  const c = url.searchParams.get("c");
  const meals = await getMealsByCategory(c);
  console.log(meals);
  return { meals };
}

const MealCard = ({ meal }) => {
  return (
    <div className="flex flex-col gap-1 border rounded-md transition ease-in overflow-hidden pb-2 w-40 items-center hover:cursor-pointer hover:scale-110">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-40 hover:scale-110 transition ease-in"
      />
      <span className="font-semibold px-2 text-slate-600 mt-4">
        {meal.strMeal}
      </span>
    </div>
  );
};

const Search = () => {
  const { meals } = useLoaderData();
  // className="grid gap-2 grid-flow-row grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-flow-col md:grid-rows-3 lg:grid-flow-col lg:grid-cols-8 lg:grid-rows-2 w-fit pl-4"
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2">
        {meals.length &&
          meals.map((meal, ind) => (
            <Link key={meal.idMeal} to={`/meals/${meal.idMeal}`}>
              <MealCard key={ind} meal={meal} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
