import React,{Component} from 'react';
import NavBar from './component/layout/NavBar'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hello from the other side</h1>
        <NavBar />
      </div>
    );
  }
}

export default App;
