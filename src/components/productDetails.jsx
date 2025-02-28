import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addcart } from '../redux/Slice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.commerce);
  const product = data.find((item) => item.id === parseInt(id));

  if (!product) return <div className="text-center mt-10">Product not found</div>;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.title} className="w-full rounded-lg shadow-md" />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-red-500 font-semibold">${product.price}</p>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <div className="mt-4">
            <span className="font-semibold">Color:</span> Dark Indigo
          </div>
          <div className="mt-2">
            <span className="font-semibold">Sizes:</span>
            <div className="flex gap-2 mt-1">
              {[25, 26, 27, 28, 29, 30, 31, 32, 33, 34].map((size) => (
                <button key={size} className="px-3 py-1 border rounded hover:bg-gray-200">{size}</button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={() => dispatch(addcart({ id: product.id }))}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 w-full md:w-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
