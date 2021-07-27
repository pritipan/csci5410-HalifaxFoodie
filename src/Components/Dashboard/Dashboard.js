import React from 'react'
import { getUserInfo } from '../../utils/AuthUtils'

const Dashboard = () => {

    const user = getUserInfo()
    return (
        <div>
            <div className="container mx-auto px-4">
                Welcome to Dashboard! {user?.username}
            </div>

        </div>
    )
}

export default Dashboard
