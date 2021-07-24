import { AmplifySignOut } from '@aws-amplify/ui-react'
import React, { useState } from 'react'
import db from '../../cred/firebase'
import { getUserInfo, setUserInfo } from '../../utils/AuthUtils'
import "./Question.css"

const Question = () => {

    const user = getUserInfo()
    const [answer, setAnswer] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        let retrivedUser = {}
        const userRef = db.collection("userDetails")
        const userData = await userRef.where('email', '==', user.email).get()
        userData.forEach(doc => {
            retrivedUser = doc.data()
        })

        console.log("DOC :", retrivedUser)

        // retrivedUser.answer
        if (!retrivedUser.answer) {
            user["answer"] = answer
            delete user.isQuestion
            // Add answer to the store
            db.collection("userDetails").add(user)
                .then(async (docRef) => {
                    user["isQuestion"] = false
                    setUserInfo(user)
                    window.location.reload()
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        } else {
            if (retrivedUser.answer === answer) {
                user["isQuestion"] = false
                setUserInfo(user)
                window.location.reload()
            } else {
                alert("Invalid Answer")
            }
        }
    }

    return (
        <div className="content">
            <div className="d-flex justify-content-between mb-3">
                <div>
                    Hello {user?.username}
                </div>
                <div>
                    <button type="button"
                        onClick={() => {
                            localStorage.clear()
                        }}>
                        Log Out
                    </button>
                </div>
            </div>

            {/* <AmplifySignOut /> */}


            <h2>
                Enter your Security Questions:
            </h2>

            <div>
                <div>
                    What was the first Car you bought ?
                </div>

                <div>
                    <input
                        value={answer}
                        onChange={(e) => {
                            setAnswer(e.target.value)
                        }}
                        placeholder="Enter your Answer"
                    />
                </div>

                <button type="button" onClick={(e) => {
                    handleSubmit(e)
                }}>
                    Submit
                </button>
            </div>

        </div>
    )
}

export default Question
