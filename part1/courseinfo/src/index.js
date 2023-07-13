import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (

    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <h1>
      {props.course}
    </h1>
  )
}


const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name}  {props.part.exercises}
    </p>
  )
}

const Total = (props) => {

  let totalExercices = 0;

  for (let i = 0; i < props.parts.length; i++) {
    totalExercices += props.parts[i].exercises
  }
  return (
    <div>
      <p>Number of exercises {totalExercices}</p>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))