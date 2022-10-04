// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useLocalStorageState(key, defaultValue='', {
  serialise = JSON.stringify,
  deserialise = JSON.parse
}={}){
  const [state, setState] = React.useState(() => {
    const localStorageValue = window.localStorage.getItem(key)
    if(localStorageValue){
      return deserialise(localStorageValue)
    }
    return defaultValue
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, serialise(state))
  },[key, state, serialise])

  return [state, setState]
}

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  const [name, setName] = useLocalStorageState('name', initialName)

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName='Dave'/>
}

export default App
