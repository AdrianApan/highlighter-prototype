import React from "react"
import ReactDOM from "react-dom"

import "./styles/bootstrap.scss"
import "./styles/index.scss"

import * as serviceWorker from "./serviceWorker"
import App from "./components/App"
import { StoreProvider } from "./context/store"

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more: https://create-react-app.dev/docs/making-a-progressive-web-app/
serviceWorker.unregister()