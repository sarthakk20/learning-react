import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$59.99',
    image: "https://images.unsplash.com/photo-1579065560489-989b0cc394ce?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$129.99',
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1631749352438-7d576312185d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: '$49.99',
    image: "https://images.ctfassets.net/javen7msabdh/6nC4Q6kVHesv5QGL4Jetc3/18191cb25375d7c35e1f4948325279de/stanmore_iii-front-desktop-1.jpeg?w=1024&fm=avif&q=100",
  },
];

const ProductCard = ({ product }) => (
  <div className="bg-white shadow rounded-2xl overflow-hidden hover:scale-105 transition-transform">
    <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
    <div className="bg-slate-400 p-4">
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
    <div className="min-h-screen bg-gray-500  text-white">
      {/* Navbar */}
      <header className="bg-gray-700 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">ShopifyLite</h1>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search products..."
              className=" text-gray border rounded-full px-4 py-1 w-48 focus:outline-none"
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