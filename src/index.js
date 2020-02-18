import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";

import HorizontalMenuBar from './Components/MenuItems/HorizontalMenuBar';
import VerticalMenuBar from './Components/MenuItems/VerticalMenuBar';

import 'semantic-ui-css/semantic.min.css';
const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
     {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <HorizontalMenuBar />
    <VerticalMenuBar />
  </App>,
  document.getElementById("root")
);
