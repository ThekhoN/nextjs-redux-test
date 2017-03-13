import React, {Component} from 'react'
//import { initStore, startClock } from '../store'
import withRedux from 'next-redux-wrapper'
import QuotesComponent from '../component/QuotesComponent'
import 'isomorphic-fetch';

//import store from '../store'
import {initStore} from '../store'
import {Provider, connect} from 'react-redux'

const url = 'http://58b2874a78d2121200bfa8dd.mockapi.io/api/quotes'



/****************/
  // start //
/****************/

//actionCreator
const asyncFetchQuotesDispatch = (url) => {
  return (dispatch) => {
    axios.get(url)
      .then(res => {
      dispatch({
        type: 'GET_QUOTES_FROM_DB',
        quotes: res.data
      })
    })
  }
}

class QuotesAppComponent extends Component {
  componentWillMount(){
    console.log('componentWillMount running. . .');
    this.props.handleFetchQuotes(url)
  }
  render(){
    const {quotes} = this.props
    return (<div>
      <h2>Quotes</h2>
      <br/>
      <QuotesComponent quotes={quotes}/>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchQuotes:(url) => {
      dispatch(asyncFetchQuotesDispatch(url))
    }
  }
}
QuotesAppComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuotesAppComponent)

class QuotesApp extends Component {
  static async getInitialProps({store}){
    const res = await fetch(url);
    const json = await res.json();
    return { quotes: json }
  }
  render(){
    const {quotes} = this.props
    //return (<QuotesAppComponent/>)
    return (<div>
      <h2>Quotes</h2>
      <br/>
      {JSON.stringify(quotes)}
    </div>)
  }
}

export default withRedux(initStore)(QuotesApp)
