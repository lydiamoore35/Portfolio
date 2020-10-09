import React from "react";

class Project extends React.Component {
  render() {
    return (
      <>
        <div className="body">
          <h1> {this.props.name} </h1>
          <h2>
            <a target="_blank" href={this.props.git}>
              Git
            </a>
          </h2>
          <h2>
            <a target="_blank" href={this.props.live}>
              Live
            </a>
          </h2>
          <h2>
            <img src={this.props.img}></img>
          </h2>
        </div>
      </>
    );
  }
}

export default Project;
