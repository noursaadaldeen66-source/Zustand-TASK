import React from "react";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
// لا حاجة لاستيراد App.css
// import './App.css';

function App() {
  return (
    <div className="h-screen bg-gray-50  ">
      {/* Navbar يقرأ من كلا المخزنين */}
      <Navbar />

      {/* Grid container for the page content */}
      <div className="container mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Section 1: User Store */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <LoginPage />
        </div>

        {/* Section 2: Product Store */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ProductPage />
        </div>

        {/* Section 3: Cart Store */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <CartPage />
        </div>
      </div>
    </div>
  );
}

export default App;
