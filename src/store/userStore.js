import { create } from "zustand";

export const useUserStore = create((set) => ({
  isLoggedIn: false,
  username: null,
  firstName: null,
  lastName: null,

  login: (userData) =>
    set({
      isLoggedIn: true,
      username: userData.username,
      firstName: userData.firstName,
      lastName: userData.lastName,
    }),

  logout: () =>
    set({
      isLoggedIn: false,
      username: null,
      firstName: null,
      lastName: null,
    }),
}));
