import { createContext, useContext } from "react";

const initialUser = {
   id: 0,
   createdAt: null,
   updatedAt: null,
   name: "",
   email: "",
   articles: []
}

export const UserContext = createContext(initialUser);
