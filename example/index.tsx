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
  Input,
  Text,
  H1,
  H2,
  H3,
  H4,
  H5,
  Card,
  Select,
} from "../.";
import "./styles.css";
import { AiOutlineLoading3Quarters, AiFillEyeInvisible } from "react-icons/ai";
import { BsFillAlarmFill } from "react-icons/bs";
import { useState } from "react";

const App = () => {
  return (
    <>
      <HakiProvider>
        <div
          style={{ border: "solid 1px black", margin: "10px", padding: "10px" }}
        >
          <Select name="hoh" size="lg">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Select>
        </div>
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
        <div style={{ marginLeft: "10px" }}>
          <Card maxWidth={500} variant="elevated">
            <Card.Header
              avatar={<Avatar alt="z" />}
              title="wassup"
              subTitle="i am subtitle"
              action={<IconButton icon="x" size="sm" color="danger" />}
            />
            <Card.Media
              src="https://picsum.photos/id/237/600/300"
              alt="doggo"
              height={294}
            />
            <Card.Content>hi</Card.Content>

            <Card.Actions justifyContent="end">
              <Button variant="ghost" size="sm">
                SHARE
              </Button>
              <Button variant="ghost" size="sm">
                LEARN MORE
              </Button>
            </Card.Actions>
          </Card>
        </div>

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
            <H1>i am h1 lorem ipsum</H1>
            <h2>i am h2 lorem ipsum</h2>
            <H2>i am h2 lorem ipsum</H2>
            <h3>i am h3 lorem ipsum</h3>
            <H3>i am h3 lorem ipsum</H3>
            <h4>i am h4 lorem ipsum</h4>
            <H4>i am h4 lorem ipsum</H4>
            <h5>i am h5 lorem ipsum</h5>
            <H5>i am h5 lorem ipsum</H5>
          </div>
          <Image
            src="https://picsum.photos/id/1027/300"
            height="300px"
            width="300px"
            alt="hehehuhuhaha"
          />
        </div>
      </HakiProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
