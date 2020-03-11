import React, { Component } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello from React</h1>
//     </div>
//   );
// }

class App extends Component {
  too = () => 'Cars';

  render() {
    const name = 'Himanshu Gawari';
    const foo = () => 'Bar';
    const loading = true;

    return (
      <div className='App'>
        <h1>Hello {name}</h1>
        <h2>Test Expressions 1+1={1 + 1}</h2>
        <h3>Hello {name.toUpperCase()}</h3>
        <h4>Hello {foo()}</h4>
        <h5>Hello {this.too()}</h5>
        {loading ? <h6>Loading...</h6> : <h6>Alerady Loaded</h6>}
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <h1>Hello From React</h1>
//       </Fragment>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <>
//         <h1>Hello From React</h1>
//       </>
//     );
//   }
// }

export default App;
