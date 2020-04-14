const addHighlight = (payload) => {
  return {
    type: "ADD_HIGHLIGHT",
    payload
  }
}

const removeHighlight = (payload) => {
  return {
    type: "REMOVE_HIGHLIGHT",
    payload
  }
}

const resetHighlights = () => {
  return {
    type: "RESET_HIGHLIGHTS"
  }
}

export { addHighlight, removeHighlight, resetHighlights }