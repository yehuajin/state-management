import React from 'react'
const reduer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 }
    case 'reduce':
      return {...state, count: state.count - 1}
  }
}
let initialState = {count: 0, info: {count: 0}}
const context = React.createContext({})

export {reduer, initialState, context}
