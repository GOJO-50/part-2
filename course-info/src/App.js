import React from 'react'

const Course = ({course}) =>{
return(
  <>
   <Header course = {course.name} />
   <Content parts = {course.parts} />
   <Total parts = {course.parts}/>
  </>
)
}
const Header = ({course}) => {
    return(
   <>
   <h1>{course}</h1>
   </>
  )
  }
  const Part = ({part, exercise}) => {
    
    return(
      <>
      {part} {exercise}
      </>
    )
  }

  const Content = ({parts}) => {

    let part = parts.map(part =>
       <p key={part.id}> 
    <Part part={part.name}  exercise={part.exercises}/> 
       </p>)

    return(
      <div>
        <Part part={part}/>
      </div>
    )
  }
    const Total = ({parts}) => {
      return(
        <>
        <p>Number of exercise </p>
        </>
      )
    }

const App = () => {
  const course = { 

  name:'Half Stack application development',
    
  parts: [
    {
      id: 1,
      name:'Fundamentals of React',
      exercises: 10},
    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7},

    {
      id: 3,
      name:'State of a component',
      exercises: 14}
   
  ]
}
  
  return(
  <>
  <Course course = {course}/>
  </>
  )
 }
 

export default App;