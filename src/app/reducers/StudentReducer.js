const initialState = { student: '' };

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    case "STUDENT":
      return {
        student: action.newStudent,
      };

    default:
      return state;
  }
}
