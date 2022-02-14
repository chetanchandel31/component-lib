import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { Alert, Button, HakiAlertProps, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Alert",
  component: Alert,
};

export default meta;

const Template: Story<HakiAlertProps> = (args) => (
  <HakiProvider>
    <Alert {...args}>
      <Alert.Title>Alert title</Alert.Title>
      <Alert.Body>Try playing with differnt values from props table</Alert.Body>
    </Alert>
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {};

export const DangerColoredAlert = () => {
  const [doShowAlert, setDoShowAlert] = useState(false);
  const handleShowAlert = () => setDoShowAlert(true);
  const handleHideAlert = () => setDoShowAlert(false);

  return (
    // we can use `color` prop to apply any of the theme colors(i.e primary, secondary, danger, warning)
    <HakiProvider>
      <Button onClick={handleShowAlert}>Show Alert</Button>
      <Alert onClose={handleHideAlert} show={doShowAlert} color="danger">
        <Alert.Title>Alert title</Alert.Title>
        <Alert.Body>
          This is a "danger" color alert — click cross button to close it
        </Alert.Body>
      </Alert>
    </HakiProvider>
  );
};

export const CustomPositionAlert = () => {
  const [doShowAlert, setDoShowAlert] = useState(false);
  const handleShowAlert = () => setDoShowAlert(true);
  const handleHideAlert = () => setDoShowAlert(false);

  return (
    // `alertPositionX` and `alertPositionY` props can be used to customise alert's position, default position is bottom left
    <HakiProvider>
      <Button onClick={handleShowAlert}>Show Alert</Button>
      <Alert
        onClose={handleHideAlert}
        show={doShowAlert}
        alertPositionX="center"
        alertPositionY="top"
      >
        <Alert.Title>Alert title</Alert.Title>
        <Alert.Body>
          This is an alert with customised position — click cross button to
          close it
        </Alert.Body>
      </Alert>
    </HakiProvider>
  );
};

export const AlertWithCustomJSXChildren = () => {
  const [doShowAlert, setDoShowAlert] = useState(false);
  const handleShowAlert = () => setDoShowAlert(true);
  const handleHideAlert = () => setDoShowAlert(false);

  return (
    // here's an example of alert with plain jsx passed as children, useful for inserting more customised layouts
    <HakiProvider>
      <Button onClick={handleShowAlert}>Show Alert</Button>
      <Alert show={doShowAlert} color="secondary">
        <h2>heading</h2>
        <div style={{ marginBottom: "8px" }}>
          This is an alert with custom jsx children — click cross button to
          close it
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button color="secondary" onClick={handleHideAlert} size="sm">
            close
          </Button>
        </div>
      </Alert>
    </HakiProvider>
  );
};
