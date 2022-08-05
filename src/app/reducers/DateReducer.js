const initialState = { date: '' };

export function dateReducer(state = initialState, action) {
  switch (action.type) {
    case "DATE":
      return {
        date: action.newDate,
      };

    default:
      return state;
  }
}
