import React,{Component} from 'react';
import NavBar from './component/layout/NavBar'
import Users from './component/users/Users'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hello from the other side</h1>
        <NavBar />
        <Users />
      </div>
    );
  }
}

export default App;
