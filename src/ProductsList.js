import React from "react";
import { useCartStore } from "./cartStore";

// Mock Data
const fakeProducts = [
  { id: 1, name: "Laptop", price: 4500 },
  { id: 2, name: "Keyboard", price: 300 },
  { id: 3, name: "Mouse", price: 150 },
];

function ProductsList() {
  // 💡 Look here: we are selecting "only" the function we need
  const addProduct = useCartStore((state) => state.addProduct);

  return (
    <div>
      <h2>Available Products:</h2>
      {fakeProducts.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
        >
          <h4>
            {product.name} - {product.price} SAR
          </h4>
          <button onClick={() => addProduct(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
