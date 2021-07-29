import React from 'react'
import LexChat from "react-lex";
// const AWS = require('aws-sdk');

const Help = () => {

    // const SESConfig = {
    //     accessKeyId: "ASIATTT6YKKF5BL2XNFU",
    //     accessSecretKey: "1Kj3qKqVYLJYTiScyPQc00lDUmzkBFbV+8kpR+Xb",
    //     region: "us-east-1"
    // }
    // AWS.config.update(SESConfig);

    return (
        <div>
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
