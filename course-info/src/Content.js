import Part from "./Part"

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

  export default Content