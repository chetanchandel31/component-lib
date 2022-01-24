import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, HakiProvider, Thing } from "../.";
import "./styles.css";

const App = () => {
  return (
    <>
      <HakiProvider>
        <Thing />
        {/* <ButtonTwo size="l" /> */}
        <Button
          style={{ marginLeft: "8px" }}
          size="md"
          color="primary"
          className="demo"
          variant="outlined"
        >
          hello
        </Button>
      </HakiProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
