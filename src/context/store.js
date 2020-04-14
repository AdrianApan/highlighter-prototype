import React, { useReducer } from "react"
import reducer from "../hooks/reducer"

const initialState = []

const StoreContext = React.createContext(initialState)

function StoreProvider({children}) {
  const [store, dispatch] = useReducer(reducer, initialState)
  
  return (
    <StoreContext.Provider value={{store, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreProvider, StoreContext }


