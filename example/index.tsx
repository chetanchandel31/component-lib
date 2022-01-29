import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Avatar, Badge, Button, HakiProvider, Thing } from "../.";
import "./styles.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
          variant="filled"
          disabled
        >
          hello
        </Button>

        <Button
          style={{ marginLeft: "8px" }}
          size="md"
          color="primary"
          className="demo"
          variant="ghost"
          disabled
        >
          hello
        </Button>

        <Badge
          color="secondary"
          badgePosition="top-left"
          variant="dot"
          badgeContent={9}
        >
          <Button size="md" color="primary" className="demo" variant="outlined">
            hello
          </Button>
        </Badge>

        {/* <img src="https://picsum.photos/id/1027/200/300" /> */}
        {/* "https://picsum.photos/id/237/200/300" */}
        <br />
        <br />
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Badge
            color="secondary"
            badgePosition="bottom-right"
            variant="dot"
            badgeContent={9}
          >
            <Avatar
              src="https://picsum.photos/id/1027/100"
              alt="abracadabra"
              // size={90}
              variant="circular"
            >
              z
            </Avatar>
          </Badge>
          <button>hi</button>
          <button>hi</button>
        </div>

        <div>
          <Button variant="outlined" size="sm">
            <AiOutlineLoading3Quarters />
          </Button>
        </div>
      </HakiProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
