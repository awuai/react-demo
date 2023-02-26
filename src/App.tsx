import * as React from 'react';
import axios from 'axios'
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
  componentDidMount(){
    this.getList();
  }

  getList(){
    axios.get('getList').then(res =>{
      console.log(res)
    })
  }
}

export default App;