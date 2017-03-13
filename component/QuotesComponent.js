import React, {Component} from 'react'
import { connect } from 'react-redux';

class QuotesComponent extends Component {
  render(){
    const {quotes} = this.props
    return (<div>
      {JSON.stringify(quotes)}
    </div>)
  }
}

export default connect (
  ({quotes}) => ({quotes}), //mapStateToProps
  null  //mapDispatchToProps
)(QuotesComponent)

/*
  refer ../components/Todo https://github.com/ooade/NextSimpleStarter

export default connect(
  ({ todos }) => ({ todos }), //mapStateToProps
  { addTodo, removeTodo } //mapDispatchToProps
)(Todo);

*/
