import React, { useContext } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./Highlight.scss"
import { StoreContext } from "../../context/store"
import { removeHighlight } from "../../hooks/actions"

function Highlight({id, text, color}) {
  const { dispatch } = useContext(StoreContext)
 
  function removeItem(id) {
    while(true) {
      const list = document.getElementsByClassName(id)
      for (let i = 0; i < list.length; i++) {
        list[i].outerHTML = list[i].innerHTML
      }
      dispatch(removeHighlight(id))
      if (list.length === 0) {
        break
      }
    }
  }

  return (
    <div className="hightlight">
      <div
        className="close"
        style={{border: `1px solid ${color}`}}
        onClick={() => removeItem(id)}
      >
        <FontAwesomeIcon icon="trash" />
      </div>
      <div style={{
        borderTop: `1px solid ${color}`,
        borderRight: `1px solid ${color}`,
        borderLeft: `1px solid ${color}`,
        borderBottom: `5px solid ${color}`
      }}>
        {text}
      </div>
    </div>
  )
}

Highlight.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Highlight
