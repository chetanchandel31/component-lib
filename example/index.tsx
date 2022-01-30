import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Avatar,
  Badge,
  Button,
  HakiProvider,
  Thing,
  CircularProgress,
  IconButton,
} from "../.";
import "./styles.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsFillAlarmFill } from "react-icons/bs";

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
          rounded
          variant="outlined"
          isLoading
        >
          hello
        </Button>

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
        <div>
          <IconButton
            size="lg"
            variant="filled"
            icon={<BsFillAlarmFill />}
            circular
            // isLoading
            // disabled
          ></IconButton>
        </div>
      </HakiProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
