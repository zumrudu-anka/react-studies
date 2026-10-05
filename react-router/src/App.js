import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import React, {Component} from "react";
import Profile from './pages/Profile';

export default class App extends Component{

  state = {
    login : false
  }

  render(){
    return (
      <BrowserRouter basename = "/study">
        <div className="App">
          
          <Header/>
  
          <button onClick = {()=>{
            this.setState({
              login : !this.state.login
            })
          }}>
            {
              this.state.login ? "Logout" : "Login"
            }
          </button>
  
          <Switch>
            <Route exact path = "/" component = {Home}/>
            {/* <Route path = "/about" component = {About}/> */}
            <Route path = "/about">
              {this.state.login ? <About/> : <Redirect to = "/"/>}
            </Route>

            {/* <Route path = "/profile">
              <Profile login = {this.state.login}/>
            </Route> */}

            <Route
              path='/profile'
              component={() => <Profile login={this.state.login} />}
            />

            {/* <Route
              path='/profile'
              render={(props) => <Profile {...props} login = {this.state.login} />}
            /> */}

            <Route path = "/portfolio/:id" component = {Portfolio}/>
            
            
            <Route component = {NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}