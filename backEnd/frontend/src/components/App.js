import React from "react";
import REactDom from "react-dom";

class App extends Component {
  render() {
    return <h1>The basic App</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
