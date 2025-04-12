/*
 context ko state menagement kei tarhan use kia jata hey 

sab sey pehly ham aike craete context method sey context create kartey hain
pehir osey variable mey save karen gey or export kar den gey 

phir apni app ya main file mey context.Provider sey wrap kar den gey
 

phir component ke andar useContext method sey context ko use karen gey
or phir value or method use karen gey 

*/

import { createContext } from "react";

export const counterContext = createContext();