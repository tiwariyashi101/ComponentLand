import productArray from "./Data";
import Card from "./Card";
import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([...productArray]);
  const [search, setSearch] = useState('');

  const topRated = () => {
    const data = productArray.filter(product => product.rating > 4.5);
    setProducts(data);
  };

  const filterByCategory = (category) => {
    const data = productArray.filter((obj) => obj.category === category);
    setProducts(data);
  };

  const handleSearch = () => {
    const filteredData = productArray.filter((obj) =>
      obj.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filteredData);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}  // Corrected the onChange handler
      />
      <button
        className="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
        onClick={handleSearch}
      >
        Search
      </button>

      <button
        className="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
        onClick={topRated}
      >
        Top Rated
      </button>
      <button
        className="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
        onClick={() => filterByCategory('beauty')}
      >
        Beauty Products
      </button>
      <button
        className="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
        onClick={() => filterByCategory("fragrances")}
      >
        Fragrances
      </button>
      <button
        className="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
        onClick={() => filterByCategory("furniture")}
      >
        Furniture
      </button>
      <button
        className="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
        onClick={() => filterByCategory("groceries")}
      >
        Groceries
      </button>

      <div className="flex flex-wrap">
        {products.map((product) => (
          <Card key={product.id} obj={product} />
        ))}
      </div>
    </>
  );
};

export default Home;


