const quotes = (state = [], action) => {
  switch (action.type) {
    case 'GET_QUOTES_FROM_DB':
      return action.quotes
    default:
      return state;
  }
}

export default quotes
