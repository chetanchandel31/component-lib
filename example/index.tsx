import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, HakiProvider, Thing, ButtonTwo } from "../.";
import { useRef } from "react";
import { MutableRefObject } from "react";

const App = () => {
  const ref: any = useRef();

  return (
    <HakiProvider>
      <Thing />
      <ButtonTwo />
      <Button size="lg">hi</Button>
      {/* <Butto color="blue">zz</Button> */}
    </HakiProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
