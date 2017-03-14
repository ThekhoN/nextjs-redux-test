import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'
import 'isomorphic-fetch';

import {initStore} from '../store'

const url = 'https://58b2874a78d2121200bfa8dd.mockapi.io/api/quotes'

//components
import QuotesComponent from '../component/QuotesComponent'
import Head from '../component/Head'
import Nav from '../component/Nav'

class QuotesApp extends Component {
  static async getInitialProps({store}){
    const res = await fetch(url);
    const json = await res.json();

    store.dispatch({
      type:'GET_QUOTES_FROM_DB',
      quotes: json
    })

  }
  render(){
    const {quotes} = this.props
    return (<div>
      <Head title='Home'/>
      <Nav/>
      <div className='contentWrapper'>
        <h2>Quotes</h2>
        <br/>
        <QuotesComponent quotes={quotes}/>
      </div>
    </div>)
  }
}

export default withRedux(initStore)(QuotesApp)
