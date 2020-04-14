import React, { useContext } from "react"

import "./Sidebar.scss"
import { StoreContext } from "../../context/store"
import { resetHighlights } from "../../hooks/actions"
import Highlight from "../Highlight"

function Sidebar() {
  const { store, dispatch } = useContext(StoreContext)

  function process() {
    alert("Send payload to API endpoint")
  }
  
  function reset() {
    while(true) {
      const list = document.getElementsByTagName("mark")
      for (let i=0; i < list.length; i++) {
        list[i].outerHTML = list[i].innerHTML
      }
      dispatch(resetHighlights())
      if (list.length === 0) {
        break
      }
    }
  }

  // Iterate over the user highlights
  const allHighlights = store.map(({id, text, color}) => {
    return(
      <Highlight key={id} id={id} text={text} color={color} />
    )
  })

  return (
    <div className="sidebar vh-100">
      {allHighlights}
      {allHighlights.length !== 0 ? 
        <div className="buttons">
          <button
            type="button"
            className="btn btn-primary styled-primary-button btn-block"
            onClick={() => process()}
          >
            Continue
          </button>
          <button
            type="button"
            className="btn btn-outline-dark btn-block"
            onClick={() => reset()}
          >
            Reset selections
          </button>
        </div>
      :
        <div className="alert alert-info">Highlight some text from the document to get started.</div>
      }
    </div>
  )
}

export default Sidebar