import { createContext, useContext } from "react";

export type NaviTitleType = {
  title: string;
  setTitle: any;
};

const navbarTitleContext = createContext<NaviTitleType>({
  title: "",
  setTitle: () => {},
});

export { navbarTitleContext, useContext };

