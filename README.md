# Haki

A component library for reactjs. (still under development and doesn't contain some essential components yet)

## Getting started

Step-1: install

```bash
cd your-react-project
npm i haki-ui
```

Step-2: wrap the root of your app with `<HakiProvider></HakiProvider>`. This will apply some global styles and ensure that all the theme related styles work properly.

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

Currently available components along with some examples and interactive documentation are listed here: https://haki.netlify.app
