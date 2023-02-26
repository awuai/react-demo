import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         react
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  state = { mun: 1 }
  render() { 
    const { mun } = this.state
    const add = ()=>{
      return this.setState({
        mun:mun+1
      })
    }
    return ( 
      <div>
        {mun}
        <br/>
        <button onClick={ ()=>{
          add()
        }}>🏠</button>
      </div>
     );
  }
}

export default App;
