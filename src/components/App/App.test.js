import React from "react"
import { shallow } from "enzyme"

import App from "./App"
import TextProcessor from "../TextProcessor"
import Sidebar from "../Sidebar"

describe("<App />", () => {
  it("should render successfully with a <TextProcessor/> and a <Sidebar/> component", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(TextProcessor)).toHaveLength(1)
    expect(wrapper.find(Sidebar)).toHaveLength(1)
  })
})