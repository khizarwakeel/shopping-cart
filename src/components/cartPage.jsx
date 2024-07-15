"use client";

import { useSelector } from "react-redux";

export default function CartPage() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            {cart.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    alt={product.title}
                    src={product.img}
                    className="h-full w-full object-cover object-center p-1"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.title}</a>
                      </h3>
                      <p className="ml-4">{product.price}$</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div className="border w-6 h-6 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                        -
                      </div>
                      <p className="text-gray-500">Qty {product.quantity}</p>
                      <div className="border w-6 h-6 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                        +
                      </div>
                    </div>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-red-600 hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <p className="mt-4 text-xl">
          Total Quantity: <span className="text-red-700">{totalQuantity}</span>
        </p>
        <p className="mt-4 text-xl">
          Total Price: <span className="text-red-700">{totalPrice}</span>
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent text-white bg-[#451a03] px-6 py-3 text-base font-medium shadow-sm"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}