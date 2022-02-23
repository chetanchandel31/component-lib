# Haki

A component library for reactjs. (still under development and doesn't contain some essential components yet)

## Getting started

Step-1: install

```bash
cd your-react-project
npm i haki-ui
```

Step-2: wrap the root of your app with `<HakiProvider></HakiProvider>`. This will apply some global styles and ensure that all haki components have access to theme. **Skipping this step will cause errors**.

```jsx
// index.js
import { HakiProvider } from "haki-ui";

ReactDOM.render(
  <React.StrictMode>
    <HakiProvider>
      <App />
    </HakiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Step-3: start using any of the in-built components in your app.

```jsx
import { Button } from "haki-ui";

function App() {
  return (
    <>
      <Button>click me 👀</Button>
    </>
  );
}

export default App;
```

## Components

Storybook documentation for available components: https://haki.netlify.app

(_please note all the icons used in examples are imported from a third party library (react-icons). if you want to use any icons, you'll also need to install "react-icons" or any other third party package of your choice. none of the icons can be imported directly from "haki-ui"_)
