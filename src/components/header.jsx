import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCart } from "../redux/productSlice/cartSlice";
import { useEffect } from "react";

const Header = () => {
  const { totalQuantity, cart } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getTotalCart())
  }, [cart])
  
  return (
    <header className="bg-gray-300 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        <Link to={"/"}>
          <h1 className="text-xl md:text-2xl text-black ">All Products</h1>
        </Link>
        <nav className="md:flex space-x-4 relative">
          <Link
            to={"/product-list"}
            className="bg-amber-950 px-10 py-2 rounded-full block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>
        </nav>
        <div className="bg-red-700 w-7 h-7 rounded-full flex justify-center items-center absolute right-0 -top-2">
          {totalQuantity}
        </div>
      </div>
    </header>
  );
};

export default Header;
