import { createContext } from "react";
import { AppContextInterface } from "./interfaces/AppContextInterface";

export const AppContext = createContext<AppContextInterface>({} as AppContextInterface);