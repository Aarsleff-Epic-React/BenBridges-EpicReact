// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// function countReducer(state, action) {
//   return {
//   ...state,
//   ...(typeof action === 'function' ? action(state) : action)
//   }
// }

function countReducer(state, action) {
  switch (action.type){
    case 'INCREMENT': {
      return {count: state.count + action.step}
    }
    default : {
      break
    }
  }
}

function Counter({initialCount = 0, step = 3}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
