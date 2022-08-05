const initialState = { course: '' };

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    case "STUDENT":
      return {
        course: action.newStudent,
      };

    default:
      return state;
  }
}
