import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.changeTtime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changeTtime() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
