
// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
//   }


const Header = (props) => {
  return(
    <div>
      <h1>
        This Is My HEADER {props.line}
      </h1>
    </div>
  )
}

const Footer = (props) => {
  
  return(
   <div>
     <footer>
       @ copyright {props.year}
     </footer>
   </div>
  )
}


const App = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Header  line ='.....'/>
      <p>This is a classwork.</p>
      <Footer year={year}/>
    </>
    )
}

export default App;
