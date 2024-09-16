import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [obj, setObj] = useState({}); // Initialize with an empty object
  let { id } = useParams();

  let getData = async () => {
    let data = await fetch(`https://dummyjson.com/products/${id}`);
    let jsonData = await data.json(); // Await the JSON data
    setObj(jsonData);
  };

  useEffect(() => {
    getData();
  }, [id]); 


  let { title,  description , price , rating , thumbnail } = obj;

  return (
    <>
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex">
            <ol role="list" className="flex items-center">
              <li className="text-left">
                <div className="-m-1">
                  <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </a>
                </div>
              </li>
              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Products </a>
                  </div>
                </div>
              </li>
              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> {title} </a>
                  </div>
                </div>
              </li>
            </ol>
          </nav>

          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                {/* <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <img className="h-full w-full max-w-full object-cover" src={thumbnail} alt={title} />
                  </div>
                </div> */}

<div className="lg:order-2 lg:ml-5">
  <div className="max-w-xl overflow-hidden rounded-lg">
    <img
      className="h-full w-full max-w-full object-cover transform transition-transform duration-300 hover:scale-110 hover:translate-x-2 hover:translate-y-2"
      src={thumbnail}
      alt={title}
    />
  </div>
</div>




                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start lg:flex-col">
                    {/* Add other thumbnails or images here */}
                    <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                      <img className="h-full w-full object-cover" src={thumbnail} alt={title} />
                    </button>
                  </div>
                </div>
              </div>
            </div>


            <div className="mt-10 w-96 shadow-lg">
                <h2 className="text-lg font-medium text-gray-900">Product Details</h2>
                <p className="mt-4 text-sm text-gray-600">{description}</p>
              </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1>

              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                  {/* Render star rating */}
                  {Array.from({ length: 5 }, (v, i) => (
                    <svg key={i} className={`block h-4 w-4 align-middle ${i < rating ? "text-yellow-500" : "text-gray-300"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
              </div>

              <h2 className="mt-8 text-base text-gray-900">Coffee Type</h2>
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <label>
                  <input type="radio" name="type" value="Powder" className="peer sr-only" defaultChecked />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Powder</p>
                </label>
                <label>
                  <input type="radio" name="type" value="Whole Bean" className="peer sr-only" />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Whole Bean</p>
                </label>
                <label>
                  <input type="radio" name="type" value="Ground" className="peer sr-only" />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Ground</p>
                </label>
              </div>

              <h2 className="mt-8 text-base text-gray-900">Choose subscription</h2>
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <label>
                  <input type="radio" name="subscription" value="4 Months" className="peer sr-only" />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">4 Months</p>
                  <span className="mt-1 block text-center text-xs">$80/mo</span>
                </label>
                <label>
                  <input type="radio" name="subscription" value="8 Months" className="peer sr-only" defaultChecked />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">8 Months</p>
                  <span className="mt-1 block text-center text-xs">$60/mo</span>
                </label>
                <label>
                  <input type="radio" name="subscription" value="12 Months" className="peer sr-only" />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">12 Months</p>
                  <span className="mt-1 block text-center text-xs">$40/mo</span>
                </label>
              </div>

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">${price}</h1>
                  <span className="text-base">/month</span>
                </div>

                <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-center text-base font-medium text-white shadow-sm hover:bg-gray-800">Start Subscription</button>
              </div>

              <ul className="mt-8 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg className="mr-2 block h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 2H7m4-10h2a2 2 0 012 2v16a2 2 0 01-2 2h-2a2 2 0 01-2-2V4a2 2 0 012-2z" />
                  </svg>
                  Free shipping on all orders
                </li>
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg className="mr-2 block h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c.667 2 2.333 2 3 2s2.333 0 3-2 2 2 2 4-1.333 4-4 4H9c-2.667 0-4-1.333-4-4s2-6 6-6z" />
                  </svg>
                  Quality guaranteed for 1 year
                </li>
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg className="mr-2 block h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8m-4-4v8" />
                  </svg>
                  Get a subscription discount
                </li>
              </ul>

             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
