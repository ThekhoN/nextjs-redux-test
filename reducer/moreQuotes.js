const moreQuotes = (state = [], action) => {
    switch (action.type) {
      case 'GET_MORE_QUOTES':
        return action.quotes
      default:
        return state;
    }
}

export default moreQuotes
