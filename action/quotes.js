export const getMoreQuotes = (quotes) => {
  return({
    type:'GET_MORE_QUOTES',
    quotes
  })
}

export const getQuotes = (quotes) => {
  return({
    type:'GET_QUOTES_FROM_DB',
    quotes
  })
}

//async dispatch
export const asyncDispatchGetMoreQuotes = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(jsonData => {
        dispatch(getMoreQuotes(jsonData))
      })
  }
}
