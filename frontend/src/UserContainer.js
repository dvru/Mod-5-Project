import React from 'react'
import UserCard from './UserCard'

export default class UserContainer extends React.Component {
    render() {
        // console.log(this.props)  
        return (
            <div>
                <UserCard {...this.props}/>
            </div>
        )
    }
}

