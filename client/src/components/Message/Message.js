import React from 'react';

import './Message.css';

const Message = ({message: { user, text }, name}) => {
    let isSentByCurrentUser = false;
    let trimmedName = name;
    //TOBECONTINUED 01:40:33

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className=" pr-10">{trimmedName}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite" >{text}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <p className="sentText">{trimmedName}</p>
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark" >{text}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
                </div>
            )
    )
}

export default Message;