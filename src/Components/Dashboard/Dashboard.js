import { AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import React from 'react'
import { getUserInfo } from '../../utils/AuthUtils'

const Dashboard = () => {

    const user = getUserInfo()
    return (
        <div>
            <h1>Welcome, {user?.username}</h1>

            {/* <button onClick={async () => {
                Auth.currentUserPoolUser().then((obj) => {
                    console.log("OBJ:", obj.attributes)
                })
            }} >
                GETTT User
            </button> */}

            {/* <AmplifySignOut /> */}
            <button type="button"
                onClick={() => {
                    localStorage.clear()
                    window.location.reload()
                }}>
                Log Out
            </button>

        </div>
    )
}

export default Dashboard
