import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  // constructor(props) {
  //   // Must call Super Method
  //   super(props);
  //   // Only time to direct assignment to State
  //   // always use setState to update
  //   this.state = { lat: null, errorMessage: "" };
  // }
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // componentDidMount() {
  //   console.log(
  //     "Component was rendered on Screen" + new Date().toLocaleString()
  //   );
  // }

  // componentDidUpdate() {
  //   console.log(
  //     "Component was just updated and rerendered on Screen" +
  //       new Date().toLocaleString()
  //   );
  // }

  renderBody() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please Accept the Location Request." />;
  }

  //Always define Render Function in Function Based Components
  render() {
    return <div className="border red">{this.renderBody()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
