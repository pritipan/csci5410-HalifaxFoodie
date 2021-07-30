import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LexChat from "react-lex";
import { getUserInfo } from '../../utils/AuthUtils';
// const AWS = require('aws-sdk');

const Help = () => {

    // const SESConfig = {
    //     accessKeyId: "ASIATTT6YKKF5BL2XNFU",
    //     accessSecretKey: "1Kj3qKqVYLJYTiScyPQc00lDUmzkBFbV+8kpR+Xb",
    //     region: "us-east-1"
    // }
    // AWS.config.update(SESConfig);
    const [text, setText] = useState([])
    const [receivedtext, setReceivedText] = useState([])
    const user = getUserInfo()

    useEffect(async () => {

        // setInterval(async () => {
        await axios.post('https://live-chat-xo7rlc2vga-ue.a.run.app/receiveMessage', {
            subscriptionId: 'user-chat'
        })
            .then(function (response) {
                console.log("data", response);
                setReceivedText(response?.data?.message || [])
            })
            .catch(function (error) {
                console.log(error);
            });
        // }, 15000);

    }, [])

    const sendText = async (item, flag) => {
        await axios.post('https://live-chat-xo7rlc2vga-ue.a.run.app/sendMessage', {
            "message": text,
            "topic": "live-chat"
        })
            .then(function (response) {
                console.log("data", response);
            })
            .catch(function (error) {
                console.log(error);
            });

        
        await axios.post('https://live-chat-xo7rlc2vga-ue.a.run.app/receiveMessage', {
            subscriptionId: 'user-chat'
        })
            .then(function (response) {
                response?.data?.message && setReceivedText((oldArray) => [...oldArray, response?.data?.message])
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return (
        <div>
            {console.log("received", receivedtext)}

            <div className="container mx-auto px-4">
                <h1 class="text-3xl md:text-4xl font-medium mb-4 text-indigo-400">
                    Chat with us
                </h1>

                {/* <form class="w-full max-w-lg"> */}
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Input text
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Enter text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => {
                        sendText()
                    }}>
                    Send
                </button>

                <label class="mt-4 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Message recieved :
                </label>
                {receivedtext?.map((t) => {
                    return (
                        <p class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            {t}
                        </p>
                    )
                })}

                {/* </form> */}
            </div>

            {/* <LexChat
                botName="foodTracking"
                IdentityPoolId="us-east-1:5bc03a82-7d05-43b3-89f1-558ec02cb4bd"
                placeholder="Placeholder text"
                style={{ position: 'absolute' }}
                backgroundColor="#FFFFFF"
                height="430px"
                region="us-east-1"
                headerText="Chat with our awesome bot"
            /> */}
            <LexChat
                botName="HalifaxFoodie"
                IdentityPoolId="us-east-1:490d8d9b-4877-4f91-a06d-aee20121e312"
                placeholder="Placeholder text"
                style={{ position: 'absolute' }}
                backgroundColor="#FFFFFF"
                height="430px"
                region="us-east-1"
                headerText="Chat with our awesome bot"
            />
        </div>
    )
}

export default Help
