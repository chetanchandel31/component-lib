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
  Text,
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
          <button>React</button>
        </div>

        <div style={{ border: "solid 2px black" }}>
          <div>
            <h1>i am h1 lorem ipsum</h1>
            <h2>i am h2 lorem ipsum</h2>
            <h3>i am h3 lorem ipsum</h3>i am normal lorem ipsum
          </div>
          <Image
            src="https://picsum.photos/id/1027/300"
            height="300px"
            width="300px"
            alt="hehehuhuhaha"
          />
        </div>

        <Text variant="body1" weight="semi-bold">
          hi
        </Text>

        <Text>hi</Text>
        <div>hi</div>
        <p>hi</p>
      </HakiProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
