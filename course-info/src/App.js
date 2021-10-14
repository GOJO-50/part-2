import React from 'react'

const Course = ({course}) =>{
  let cou = course.map(course => 
  <div key={course.id}>
  <Header course = {course.name}/>
  <Content parts = {course.parts}/>
  <Total parts = {course.parts}/>
  </div>
    )

return(
  <>
   {cou}
  </>
)
}

const Header = ({course}) => {
    return(
   <>
   <h1>
     {course}
  </h1>
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
      
      let loop = parts.map(part => part.exercises)

    const total = loop.reduce((s, p) => s + p)

   
      return(
        <>
        <strong>Number of exercise {total}</strong>
        </>
      )
    }

const App = () => {
  const course = [
  { 
  name:'Half Stack application development',
  id: 1,
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
      exercises: 14},
    
      {
        id: 4,
        name:'Redux',
        exercises: 11},
   
  ]
},
{
  name: 'Node.js',
  id: 2,
  parts: [
    {
      name: 'Routing',
      exercises: 3,
      id: 1
    },
    {
      name: 'Middlewares',
      exercises: 7,
      id: 2
    }
  ]
}
]  

  return(
  <>
  <Course course = {course}/>
  </>
  )
 }
 

export default App;