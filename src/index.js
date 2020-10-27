import React, { Component } from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  constructor(props) {
    // Must call Super Method
    super(props);

    // Only time to direct assignment to State
    // always use setState to update
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Call setState to update Component State
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  //Always define Render Function in Function Based Components
  render() {
    return <div>Latitude: {this.state.lat}</div>;
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
