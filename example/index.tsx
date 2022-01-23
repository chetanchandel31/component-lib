import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, Thing } from "../.";

const App = () => {
  return (
    <div>
      <Thing />
      <Button color="blue">zz</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
