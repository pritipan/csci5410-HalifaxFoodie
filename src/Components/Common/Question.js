import { AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { getUserInfo, setUserInfo } from '../../utils/AuthUtils'

const Question = () => {

    const [user, setUser] = useState(getUserInfo())
    const [question, setQuestion] = useState("")

    return (
        <div>
            {console.log('user :', user)}
            Hello {user?.username}
            <AmplifySignOut />



            <h2>
                Security Questions:
            </h2>

            <div>
                <div>
                    What was the first Car you bought ?
                </div>

                <div>
                    <input
                        value={question}
                        onChange={(e) => {
                            setQuestion(e.target.value)
                        }}
                        placeholder="Enter your Answer"
                    />
                </div>
            </div>

        </div>
    )
}

export default Question
