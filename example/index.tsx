import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, HakiProvider, Thing } from "../.";

const App = () => {
  return (
    <>
      {/* <HakiProvider theme={{ primary: "blue" }}> */}
      <Thing />
      {/* <ButtonTwo size="l" /> */}
      <Button size="lg" color="primary" className="asas">
        hi
      </Button>
      {/* </HakiProvider> */}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
