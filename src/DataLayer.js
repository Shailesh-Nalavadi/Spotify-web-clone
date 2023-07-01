import React, { createContext, useContext, useReducer } from "react";
//Creating the data layer for easy fetch of the required variables such as song,queue,etc
export const DataLayerContext = createContext();

export const DataLayer = ({ reducer, initialState, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);
export const useDataLayerValue = () => useContext(DataLayerContext);
