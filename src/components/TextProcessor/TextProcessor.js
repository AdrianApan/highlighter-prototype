import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./TextProcessor.scss"
import useTextProcessor from "./hooks/useTextProcessor"

function TextProcessor() {
  const { loading, showUploader, text, handleClick, handleChange, selectedText } = useTextProcessor()

  return (
    <>
      <div className={`uploader ${showUploader ? 'd-block' : 'd-none'}`}>
        <div className="row d-flex flex-column justify-content-center align-items-center align-content-center min-vh-100">
          <input
            type="file"
            id="file"
            className="input-file"
            accept=".txt"
            onChange={event => handleChange(event)}
          />
          <label htmlFor="file"><FontAwesomeIcon icon="upload" /> Click here to upload a file</label>

          <div className="separator">or</div>

          <button
            type="button"
            className="btn btn-light mt-2"
            onClick={() => handleClick()}
          >
            Try a sample text
          </button>
        </div>
      </div>
      <div className="file-content">
        {loading ? 
          <div className="spinner-border" role="status"> <span className="sr-only">Loading...</span> </div>
        :
          <div
            className="inner"
            onMouseUp={selectedText}
            dangerouslySetInnerHTML={{__html: text}}
          ></div>
        }
      </div>
    </>
  )
}

export default TextProcessor
