import React from 'react';
import IssueList from './IssueList'
import Search from './Search'


class IssueContainer extends React.Component {


  render() {
    
    return (
      <div>
      <Search handleChange={this.props.handleChange} /> 
      <IssueList displayIssues={this.props.displayIssues} handleIssue={this.props.handleIssue}/>
      </div>
    );
  }
}
export default IssueContainer;

