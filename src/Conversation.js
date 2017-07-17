import React from 'react';
import './Conversation.css';
import { InputWithButton } from 'watson-react-components';
import Message from './Message.js'

function Conversation(props) {

    function makeMessage(msgObj, index) {
        return(
            <Message key={index} position={msgObj.position || false} label={msgObj.label || false} date={msgObj.date || false} message={msgObj.message} hasTail={msgObj.hasTail || false}/>
        );
    }

    return(
        <div className="conversation">
            <div className="conversation__messages">
                <div>
                    {props.messageObjectList.map(makeMessage)}
                </div>
            </div>
            <div className="conversation__input-container">
                <InputWithButton className="conversation__input" onSubmit={props.onSubmit} placeholder="Say something to Watson."/>
            </div>
        </div>
    );
}

export default Conversation;

// Conversation
/**
 * + conversationData: arr(obj) // specify schema
 * + onSubmit: func
 * + showLoading: bool
 * 
 * autoscroll conversation
 */

// Chat Bubble
/**
 * + position: enum(left, right)
 * + label: string
 * + date: string
 * + message: string
 * + hasTail: bool
 */