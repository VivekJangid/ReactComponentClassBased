import React, { Component } from "react";
import Spinner from "./Spinner";

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      });
    }, 1000);
  }

  renderClock() {
    if (this.state.date && this.state.time) {
      return (
        <div class="ui mini horizontal divided list">
          <div class="item">
            <div class="content">
              <div class="header">Date : {this.state.date}</div>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <div class="header">Time : {this.state.time}</div>
            </div>
          </div>
        </div>
      );
    } else return <Spinner />;
  }

  render() {
    return <div>{this.renderClock()}</div>;
  }
}

export default Clock;
