const initialState = { status: '' };

export function statusReducer(state = initialState, action) {
  switch (action.type) {
    case "STATUS":
      return {
        status: action.newStatus,
      };

    default:
      return state;
  }
}
