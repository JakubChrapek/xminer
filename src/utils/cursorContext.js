import React, { createContext, useReducer, useContext } from "react"

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CURSOR": {
      return {
        ...state,
        cursorShow: action.cursorShow,
      }
    }
    case "CHANGE_CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      }
    }
    case "CHANGE_CURSOR_SIZE": {
      return {
        ...state,
        cursorSize: action.cursorSize,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    cursorShow: false,
    cursorSize: "big",
    cursorType: "full",
    cursorTypes: ["full, outline"],
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
