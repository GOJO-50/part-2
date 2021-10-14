const Total = ({parts}) => {
      
    let loop = parts.map(part => part.exercises)

  const total = loop.reduce((s, p) => s + p)

 
    return(
      <>
      <strong>Number of exercise {total}</strong>
      </>
    )
  }
export default Total