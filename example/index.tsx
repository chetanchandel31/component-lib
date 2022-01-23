import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, HakiProvider, Thing } from "../.";

const App = () => {
  return (
    <HakiProvider>
      <Thing />
      <Button color="blue">zz</Button>
    </HakiProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
