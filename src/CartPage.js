import React from "react";
import { useCartStore } from "./cartStore";

function CartPage() {
  // 💡 Here we select everything we need
  const cart = useCartStore((state) => state.cart);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div>
      <h2>Cart Contents:</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: 5,
              }}
            >
              <span>
                {item.name} (Quantity: {item.quantity})
              </span>
              <button onClick={() => removeProduct(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default CartPage;
