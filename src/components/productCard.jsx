import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice/cartSlice";

const ProductCard = () => {
  const items = useSelector((state) => state.allCart.productData);
  const dispatch = useDispatch();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto lg:my-24 my-5 lg:gap-14 gap-8 px-4">
      {items.map((cart, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="">
            <img
              className="p-4 h-72 mx-auto"
              src={cart.img}
              alt="Technology Acquisitions"
            />
          </a>
          <div className="p-5">
            <a href="">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {cart.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ${cart.price}
            </p>
            <button
              onClick={() => dispatch(addToCart(cart))}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#451a03] rounded-full"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;