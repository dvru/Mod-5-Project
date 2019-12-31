import React from 'react';


class CommentForm extends React.Component{

  // constructor() {
  //   super();

  //   this.state = {
  //     value: ''
  //   }
  //   // this.commentForm = this.commentForm.bind(this)
  // }

  // handleChange(e) {

  //   this.setState({
  //     value: e.target.value
  //   })
  // }


// commentForm () {
//   console.log('worked')
//   let issueId = this.props.issueId.id
//   console.log(issueId)
//   fetch('http://localhost:8000/comments', {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         content: this.state.value,
//         user_id: localStorage.userId,
//         issue_id: issueId
//       })
//     }).then(res => res.json())
//     .then(data => {
//       console.log(data)
//     })
//   }





render(){
    return(<div>

      <form onSubmit={(e) => this.props.commentForm(e)}>
          <input 
            type='text' 
            placeholder='whats your issue?'
            value= {this.props.value}
            onChange={(e)=> this.props.handleChange(e)}  
            />
       <button type='submit'> Add Comment </button>
       <button>Delete</button>

      </form>
  </div>)

  }
}

export default CommentForm;