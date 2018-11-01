import React, { Component } from "react";
import "./JobsPhoto";

class JobsPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeseState: false
    };

    this.like = this.like.bind(this);
  }

  like() {
    this.setState({
      likeseState: !this.state.likeseState
    });
  }

  render() {
    if (!this.props.view) {
      return null;
    }
    console.log(this.props);
    console.log(this.state);
    console.log(this.props.children);

    return (
      <div>
        <img
          alt={this.props.alt}
          src={this.props.src}
          className={this.props.className}
          id={this.props.someID}
        />

        <div>{new Date().toLocaleDateString()}</div>
      </div>
    );
  }
}

export default JobsPhoto;
