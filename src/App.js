import React from "react";
import Project from "./classcomp/Project";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Project
          name={"WeatherWize"}
          git={"https://github.com/lydiamoore35/Project-1"}
          live={"https://lydiamoore35.github.io/Project-1/"}
          img={"https://i.imgur.com/u0X1VbM.png[/img]"}
        />
        <Project
          name={"Create your Cookbook"}
          git={"https://github.com/lydiamoore35/Project-2-2"}
          live={"https://lm-project-2.herokuapp.com/"}
          img={"https://i.imgur.com/1NR6pk9.png[/img]"}
        />
      </>
    );
  }
}

export default App;
