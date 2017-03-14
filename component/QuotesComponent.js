import React, {Component} from 'react'
import { connect } from 'react-redux';

const url2 = 'https://58c7c5f6939d711200e9d1d1.mockapi.io/api/quotes'

class QuotesComponent extends Component {
  constructor(props){
    super(props)
    this.getMoreQuotes = this.getMoreQuotes.bind(this)
  }
  getMoreQuotes(){
    const {moreQuotes} = this.props
    if(moreQuotes.length < 1){
      this.props.handleFetchQuotes(url2)
    }
    else {
      console.log('already got more quotes. . .');
    }
  }
  render(){
    const {quotes, moreQuotes} = this.props
    return (<div>
      <div>
        <h4>Main Quotes:</h4>
        <br/>
        {quotes.map((quote, key) => (<li key={quote.id}>
          {quote.quote}<br/>
          -<span className='author'>{quote.author}</span>
        </li>))}
      </div>
      <br/>
      <br/>
      <div>
        <button onClick={this.getMoreQuotes}>get more quotes</button>
        <br/>
        {moreQuotes.map((quote, key) => (<li key={quote.id}>
          {quote.quote}<br/>
          -<span className='author'>{quote.author}</span>
        </li>))}
      </div>
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    moreQuotes: state.moreQuotes
  }
}

import {asyncDispatchGetMoreQuotes} from '../action/quotes'

const mapDispatchToProps = dispatch => {
  return {
    handleFetchQuotes:(url)=>{
      dispatch(asyncDispatchGetMoreQuotes(url))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(QuotesComponent)
