import React from 'react';
import CommentForm from './CommentForm'
import { Link } from 'react-router-dom';


class IssueDetail extends React.Component {

  state = {
    comments: []
  }

  componentDidMount() {
    // console.log(this.props);
  }
  getComments() {
    let issueUrl = "http://localhost:8000/issues/" + this.props.currentIssue.id
    // console.log(issueUrl)
    fetch(issueUrl) // issue data
    .then(res => res.json())
    .then(issue => {
        this.setState({
          comments: issue.comments
        })
    })
  }

  handleChange(e) {
    // console.log(e.target.value)
    // this.setState({
    //   value: e.target.value
    // })
  }

  // getComments() {
  //   console.log('have current issue')
  // }


  commentForm = (e) => {
    e.preventDefault();
    console.log('worked')
    let issueId = this.props.currentIssue.id
    console.log(issueId)
    fetch('http://localhost:8000/comments', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content: e.target[0].value,
          user_id: localStorage.userId,
          issue_id: issueId
        })
      }).then(res => res.json())
      .then(data => {
        this.setState({
          comments: [...this.state.comments, data]
        })
      })
    }

  render() {

    if (this.props.currentIssue && this.state.comments.length === 0) {
      this.getComments();
    }

    return (
        <ul>
        <li>
        <div>
        {this.props.currentIssue ?
        <div>
        Description:
        <br></br>
        
      <p>{this.props.currentIssue.description}</p>
      
        <br/>
        <CommentForm issueId={this.props.currentIssue} handleChange={this.handleChange} commentForm={this.commentForm}  />
        <br></br>
        <br></br>
        <h3>Comments from Users:</h3>
        <li>
        {this.state.comments.map(
        (comment) => <p> {comment.content} </p> )}
        </li>
        </div> 
        :
        ''
      }
      <br></br>
      <Link className= "navLinks" to ="/issues">Back</Link>

      </div>
      </li>
      </ul>
      );
    }
}

export default IssueDetail;