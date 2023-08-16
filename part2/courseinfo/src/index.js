import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (

    <div>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>
      {props.courseName}
    </h1>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part part={props.courseParts[0]} />
      <Part part={props.courseParts[1]} />
      <Part part={props.courseParts[2]} />

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

  for (let i = 0; i < props.courseParts.length; i++) {
    totalExercices += props.courseParts[i].exercises
  }
  return (
    <div>
      <p>Number of exercises {totalExercices}</p>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))