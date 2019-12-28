import React from 'react'

export default function UserCard(props) {
    console.log(localStorage);
    return (
        <div>
            <p>name: {localStorage.firstName + ' ' + localStorage.lastName}</p>
            
        </div>
    )
}