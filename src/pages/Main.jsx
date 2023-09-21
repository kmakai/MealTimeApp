import { Link } from "react-router-dom";
import { Categories } from "../data";
import { getMealsByCategory } from "../fetchers";

const CategoryCard = ({ category }) => {
  return (
    <div className="flex items-end justify-center gap-1 border rounded-md py-2 hover:-translate-y-1 shadow-sm hover:shadow-md transition ease-in">
      <span className="text-2xl">{category.icon}</span>
      <span className="font-semibold px-2">{category.strCategory}</span>
    </div>
  );
};

const Main = () => {
  return (
    <div className="p-4">
      <p className="text-2xl">What are you in the mood for?</p>
      <p className="text-gray-500">
        Choose a category to see what recipes we have for you!
      </p>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 mt-4">
        {Categories.map((c, ind) => (
          <Link
            key={ind}
            // onClick={async () => await getMealsByCategory(c.strCategory)}
            to={`/search?c=${c.strCategory}`}
          >
            <CategoryCard key={ind} category={c} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
