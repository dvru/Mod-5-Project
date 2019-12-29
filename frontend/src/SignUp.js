import React from 'react'
// import { Modal, Button } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

export default function SignUp(props) {
    console.log(props)
    
    function range(start, end) {
        if(start === end) return [start];
        return [start, ...range(start + 1, end)];
    }

    function signup(e, props) {
        e.preventDefault();
        // debugger;
        const [ firstName, lastName, username, age, email, password ] = range(0,5).map(i => e.target[i].value)
        fetch('http://localhost:8000/users/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                username,
                age,
                email,
                password
            })
        })
        .then(res => res.json())
        .then(user => {
            localStorage.firstName = user.firstName;
            localStorage.lastName = user.lastName;
            localStorage.username = user.username;
            localStorage.id = user.id;
            localStorage.age = user.age;
            localStorage.token = user.token;
            localStorage.email = user.email
            localStorage.password = user.password
            if (user.status === 'success') {
                // console.log(localStorage);
                // console.log(props)
                // debugger
                props.history.push('/login');
            }
        });
        
    }

    return (

                <div>
                    <form  onSubmit={(e) => {signup(e, props)}} className="ui form" style={{padding: '2em'}}>
                        <div className="field">
                            <label>First Name</label>
                            <input placeholder="First Name" />
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input placeholder="Last Name" />
                        </div>
                        <div className="field">
                            <label>Username</label>
                            <input placeholder="Username" />
                        </div>
                        <div className="field">
                            <label>Age</label>
                            <input placeholder="Age" />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input placeholder="Email" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input placeholder="Password" type='password' />
                        </div>
                        <div className="field">
                            <label>Confirm Password</label>
                            <input placeholder="Password" type='password' />
                        </div>
                        <button type="submit" className="ui button">Submit</button>
                    </form>
                
                </div>  

    )
}