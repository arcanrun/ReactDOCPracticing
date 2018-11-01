import React, { Component } from "react";
import "./Like.css";

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.like = this.like.bind(this);
  }

  like() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    return (
      <div className="Like" onClick={this.like}>
        {this.state.liked ? "\u2764" : "\u2661"}
      </div>
    );
  }
}

export default Like;
