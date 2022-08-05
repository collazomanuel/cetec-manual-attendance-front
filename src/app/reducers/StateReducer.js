const initialState = { _state: '' };

export function stateReducer(state = initialState, action) {
  switch (action.type) {
    case "STATE":
      return {
        _state: action.newState,
      };

    default:
      return state;
  }
}
