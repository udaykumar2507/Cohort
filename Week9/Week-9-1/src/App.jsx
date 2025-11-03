import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Component } from 'react';
import Datafetch from './datafetch';
import Isonlinehook from './hooks/isonlinehook';
import Mousemovehook from './hooks/mousemovehook';
import Interval from './hooks/interval';

function App() {
  const [render,setrender]=useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setrender(false);
    }, 5000);
  }, []);

  return (      
    <>
     {/* {render.?<MyComponent />:<div>  </div>} */}
     {/* <Datafetch/> */}
     {/* <Isonlinehook></Isonlinehook> */}
      {/* <Mousemovehook></Mousemovehook> */}
      <Interval></Interval>
     
    </>
  )
}
//functional component example
// function MyComponent() {  
//   const [count, setCount] = useState(0)

//    const incrementCount = () => { 
//     setCount(count + 1)
//    }

//    return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//    )
//


// Class component example
// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   // method to increment count
//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// Mounting and Unmounting example functional component
// function MyComponent() {  
//    useEffect( () =>{
//      console.log("Component Mounted");
//      return () => {
//       console.log("Component Unmounted");
//      }
//    },[]);
//    return (
//     <div>
//       <p>This is MyComponent</p>
//     </div>
//    )

//   }

class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component Mounted");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    return (
      <div>
        <p>This is MyComponent</p>
      </div>
    );
  }
}



export default App;
