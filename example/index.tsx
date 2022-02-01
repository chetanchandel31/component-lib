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
  Backdrop,
  Image,
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
          size="xl"
          color="primary"
          className="demo"
          rounded
          variant="filled"
          endIcon={<BsFillAlarmFill />}
          elevated
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

        <div style={{ border: "solid 2px black" }}>
          <div>
            This reusable React component will manage all of your changes to the
            document head. Helmet takes plain HTML tags and outputs plain HTML
            tags. It's dead simple, and React beginner friendly.
          </div>
          <Image src="https://picsum.photos/id/1027/300" alt="hehehuhuhaha" />
        </div>
      </HakiProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
