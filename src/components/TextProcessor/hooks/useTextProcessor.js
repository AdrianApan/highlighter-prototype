import { useState, useContext } from "react"
import { v1 as uuidv1 } from "uuid"
import randomColor from "randomcolor"

import { StoreContext } from "../../../context/store"
import { addHighlight } from "../../../hooks/actions"

function useTextProcessor() {
  const { dispatch } = useContext(StoreContext)
  const [text, setText] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showUploader, setShowUploader] = useState(true)

  // Load sample text
  function handleClick() {
    setShowUploader(false)
    setLoading(true)
    setTimeout(() => {
      fetch('./sample_text.txt')
        .then(res => res.text())
        .then(text  => setText(text))
        setLoading(false)
    }, 2000) // Mock loading
  }

  // Handle file upload
  function handleChange(event) {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onprogress = event => {
      setShowUploader(false)
      setLoading(true)
    }

    reader.onload = event => {
      setTimeout(() => {
        setText(event.target.result)
        setLoading(false)
      }, 2000) // Mock loading to demonstrate read.onprogress
    }

    reader.readAsText(file)
  }

  // Get the user highlights and save it to state
  function selectedText() {
    const selection = window.getSelection()
    const color = randomColor()

    if ( selection.toString().trim().length !== 0){
      const selectionData = {
        id: uuidv1(),
        text: selection.toString(),
        start: selection.anchorOffset,
        end: selection.focusOffset,
        color: color
      }

      // Wrap selection in a <mark> tag
      const mark = document.createElement("mark")
      mark.style.backgroundColor = color
      mark.style.opacity = 0.85
      mark.className = selectionData.id

      if (window.getSelection) {
        var sel = window.getSelection()
        if (sel.rangeCount) {
          var range = sel.getRangeAt(0).cloneRange()
          mark.append(range.extractContents())
          range.insertNode(mark)
        }
      }

      // Deselect everything
      if (window.getSelection) {
        window.getSelection().removeAllRanges()
      } else if (document.selection) {
        document.selection.empty()
      }

      // Save highlight
      dispatch(addHighlight(selectionData))
    }
  }

  return {
    text,
    loading,
    showUploader,
    handleClick,
    handleChange,
    selectedText
  }
}

export default useTextProcessor