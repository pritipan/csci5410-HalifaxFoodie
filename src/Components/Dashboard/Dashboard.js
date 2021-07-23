import { AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome, User</h1>
            <button onClick={async () => {
                Auth.currentUserPoolUser().then((obj) => {
                    console.log("OBJ:", obj.attributes)
                })
            }} >
                GETTT User
            </button>
            <AmplifySignOut />
        </div>
    )
}

export default Dashboard
