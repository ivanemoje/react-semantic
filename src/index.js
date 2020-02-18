import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";

import HorizontalMenuBar from './Components/MenuItems/HorizontalMenuBar';
import VerticalMenuBar from './Components/MenuItems/VerticalMenuBar';

// import semantic_css from './css/semantic.min.css';
import 'semantic-ui-css/semantic.min.css';
const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
     {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
// styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// styleLink.href = semantic_css;
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <HorizontalMenuBar />
    <VerticalMenuBar />
  </App>,
  document.getElementById("root")
);
