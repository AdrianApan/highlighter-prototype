function reducer(state, action) {
	switch (action.type) {
		case "ADD_HIGHLIGHT":
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          start: action.payload.start,
          end: action.payload.end,
          color: action.payload.color
        }
      ]
    case "REMOVE_HIGHLIGHT":
      return state.filter(item => item.id !== action.payload)
    case "RESET_HIGHLIGHTS":
      return []
    default:
      return state
	}
}

export default reducer