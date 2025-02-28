import { useDispatch, useSelector } from "react-redux";
import { removeFromcart } from "../redux/Slice";
import image from "../assets/imgs/cart.jpg";

const Cart = () => {
  const cartItems = useSelector((state) => state.commerce?.cart || {});
  const cartArray = Object.values(cartItems);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mt-16 w-full">
        <img src={image} alt="Cart Banner" className="w-full h-auto object-cover rounded-lg" />
      </section>

      <h2 className="text-2xl font-semibold text-gray-800 my-6 text-center">Your Cart</h2>

      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white shadow-md rounded-lg table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 text-left w-1/6">Image</th>
              <th className="py-3 px-4 text-left w-1/4">Title</th>
              <th className="py-3 px-4 text-left w-1/6">Price</th>
              <th className="py-3 px-4 text-left w-1/6">Quantity</th>
              <th className="py-3 px-4 text-left w-1/6">Action</th> 
            </tr>
          </thead>
          <tbody>
            {cartArray.length > 0 ? (
              cartArray.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-100 transition">
                  <td className="py-3 px-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                  </td>
                  <td className="py-3 px-4">{item.title}</td>
                  <td className="py-3 px-4 font-semibold text-gray-700">${item.price}</td>
                  <td className="py-3 px-4">{item.quantity}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => dispatch(removeFromcart({ id: item.id }))}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 w-full md:w-auto"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-6">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
