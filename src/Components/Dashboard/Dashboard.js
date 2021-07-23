import { AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome, User</h1>
            <button onClick={async () => {

                const a = await Auth.currentAuthenticatedUser()
                console.log("A :", a)
            }} >
                GETTT User
            </button>
            <AmplifySignOut />
        </div>
    )
}

export default Dashboard
