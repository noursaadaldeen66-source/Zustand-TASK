import { create } from "zustand";

export const useCartStore = create((set) => ({
  // --- 1. Initial State ---
  // Initially, the cart is empty
  cart: [], // Will be an array of products

  // --- 2. Actions ---

  // (a) Add a product to the cart
  addProduct: (product) => {
    set((state) => {
      // Is the product already in the cart?
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If it exists, just increase its quantity
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Create a new copy of the product with quantity + 1
            : item
        );
        return { cart: updatedCart }; // Return the updated cart
      } else {
        // If it doesn't exist, add it to the cart as a new product with quantity = 1
        const newCart = [...state.cart, { ...product, quantity: 1 }];
        return { cart: newCart }; // Return the new cart
      }
    });
  },

  // (b) Remove a product from the cart
  removeProduct: (productId) => {
    set((state) => ({
      // Use filter to create a new array that doesn't contain the product we want to remove
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },

  // (c) Clear the cart
  clearCart: () => {
    set({ cart: [] }); // Simply, return an empty array
  },
}));
