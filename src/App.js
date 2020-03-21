import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/dashborad/Header';
import Dashboard from './components/dashborad/Dashboard';
import { BrowserRouter as Route, Switch, BrowserRouter } from 'react-router-dom';
import UploadImage from './components/uploadimage/UploadimageMain';
class App extends Component{
  render(){
  return (
    <div className="App">
  <BrowserRouter>
        <Switch>
          <Route path="/dashboard/"><Dashboard/></Route>
          <Route path='/uploadimage/'>
          <Header/>
          <UploadImage />
          </Route>
        </Switch>
  </BrowserRouter> 
    </div>
  );
  }
}

export default App;
