import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji'

const Message = ({message: { user, text }, name}) => {
    let isSentByCurrentUser = false;
    var trimmedName = name.trim().toLowerCase();
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
                        <p className="messageText colorWhite" >{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart"> 
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark" >{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sentText pl-1 0">{user}</p>
                </div>
            )
    )
}

export default Message;