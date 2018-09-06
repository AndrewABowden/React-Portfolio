import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isAuthenticated: false,
    };
    this.authCB = this.authCB.bind(this);
  }

  authCB(email, isAuthenticated, id) {
    this.setState({
      email:email,
      isAuthenticated:isAuthenticated,
      id: id,
    });
  }

  
  render() {
    return (
      <Router>
        <div>
          <Nav email={this.state.email} isAuthenticated={this.state.isAuthenticated} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact path="/account"
              render={props => <Account authCB={this.authCB} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
