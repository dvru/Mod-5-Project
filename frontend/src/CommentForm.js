import React from 'react';


class CommentForm extends React.Component{

render(){
    return(<div>
      <form onSubmit={(e) => {
          this.props.addComment(e)
          }}>
          <input type='text' placeholder='whats your issue?'/>
          <input type='submit' value='Add Comment'/>
          <br></br>
          <button> edit </button>
          <br></br>
          <button> update </button>
      </form>
  </div>)

  }
}

export default CommentForm;