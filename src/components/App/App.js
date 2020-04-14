import React from "react"

import "./App.scss"
import { FontAwesome } from "../../utils/fontAwesome"

import TextProcessor from "../TextProcessor"
import Sidebar from "../Sidebar"

function App() {
  // FontAwesome utility library
  FontAwesome()

  return (
    <div className="app container-fluid">
      <div className="row min-vh-100 no-gutters">
        <div className="col-9 main-content">
          <TextProcessor />
        </div>
        <div className="col-3 drawer min-vh-100">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App