//import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Discover from "./pages/Discover";
import clickyGame from "./pages/clickyGame";
//import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={clickyGame} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);
export default App;








// class App extends Component {
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

// export default App;
// //-->