import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$59.99',
    image: 'https://via.placeholder.com/300x300.png?text=Headphones',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$129.99',
    image: 'https://via.placeholder.com/300x300.png?text=Smart+Watch',
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: '$39.99',
    image: 'https://via.placeholder.com/300x300.png?text=Gaming+Mouse',
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: '$49.99',
    image: 'https://via.placeholder.com/300x300.png?text=Speaker',
  },
];

const ProductCard = ({ product }) => (
  <div className="bg-white shadow rounded-2xl overflow-hidden hover:scale-105 transition-transform">
    <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.price}</p>
      <button className="mt-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
        Add to Cart
      </button>
    </div>
  </div>
);

const EcommerceStore = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">ShopifyLite</h1>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search products..."
              className="border rounded-full px-4 py-1 w-48 focus:outline-none"
            />
            <ShoppingCart className="w-6 h-6" />
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default EcommerceStore;

// function Example(){
//     return(
//         <h3>This is an example function. Always write the function name with a capital letter.</h3>
//     )
// }
// export default Example;