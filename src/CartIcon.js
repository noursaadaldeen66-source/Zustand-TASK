import React from "react";
import { useCartStore } from "./cartStore";

function CartIcon() {
  // 💡 Look here: we are selecting "only" the total count
  // (we sum the quantities of all products)
  const totalItems = useCartStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <>
      <div style={{ fontSize: "24px", padding: 20, background: "#eee" }}>
        🛒 Cart ({totalItems})
      </div>
    </>
  );
}

export default CartIcon;
