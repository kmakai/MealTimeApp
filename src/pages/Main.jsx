import { Categories } from "../data";
import Prop from "prop-types";

const CategoryCard = ({ category }) => {
  return (
    <div className="flex items-end justify-center gap-2 border rounded-md py-2 hover:-translate-y-1 shadow-sm hover:shadow-md transition ease-in">
      <span className="text-2xl">{category.icon}</span>
      <span className="font-semibold ">{category.strCategory}</span>
    </div>
  );
};

CategoryCard.propTypes = {
  category: Prop.shape({
    strCategory: Prop.string.isRequired,
    icon: Prop.string.isRequired,
  }),
};

const Main = () => {
  function handleClick(name) {
    console.log("The link was clicked.", name);
    window.location.href = `/search?c=${name}`;
  }
  return (
    <div className="p-4">
      <p className="text-2xl">What are you in the mood for?</p>
      <p className="text-gray-500">
        Choose a category to see what recipes we have for you!
      </p>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 mt-4">
        {Categories.map((c, ind) => (
          <button key={ind} onClick={() => handleClick(c.strCategory)}>
            <CategoryCard key={ind} category={c} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Main;
