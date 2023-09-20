const SearchBar = () => {
  return (
    <div className="p-6">
      <form id="search-form" className="">
        <input
          type="text"
          placeholder="Know what you want? Search for it here!"
          className="border-2 rounded p-2 rounded-r-none sm:w-80"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded rounded-l-none border-blue-500 border-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
