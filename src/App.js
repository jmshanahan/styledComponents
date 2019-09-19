import React, {Component} from 'react';
import Home from './pages/Home';
import GlobalStyles from './components/globals/GlobalsStyles'
import './App.css';

class App extends Component {

  render(){
    return <>
    <GlobalStyles/>

    <Home/></>
  }
}
export default App;
