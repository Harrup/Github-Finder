import React,{Component} from 'react';
import NavBar from './component/layout/NavBar'
import UserItem from './component/users/UserItem'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hello from the other side</h1>
        <NavBar />
        <UserItem />
      </div>
    );
  }
}

export default App;
