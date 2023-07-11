import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  // console.log('Hello from component')
  const now = new Date()
  const name = "Jesus"
  const age = 10

  return (
    <>
      <h1>{now.toString()}</h1>
      <Hello name="Pablo" age={20 + 15} />
      <Hello name="Carla" age={age} />
      <Hello name={name} age={38} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 