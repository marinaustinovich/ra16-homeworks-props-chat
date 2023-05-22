import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message/Message';
import Response from '../Response/Response';
import Typing from '../Typing/Typing';

function MessageHistory({ list = [] }) {
    if(list.length === 0) return null;

    return (
        <ul>
            {list.map(message => {
                const { id, time, text } = message; // выбираем только нужные поля из message
    
                switch(message.type) {
                    case 'response':
                        return <Response key={id} from={message.from} message={{ id, time, ...(text && { text }) }} />
                    case 'message':
                        return <Message key={id} from={message.from} message={{ id, time, ...(text && { text }) }} />
                    case 'typing':
                        return <Typing key={id} from={message.from} message={{ id, time }} />
                    default:
                        return null;
                }
            })}
        </ul>
    )
}

MessageHistory.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            from: PropTypes.shape({
                name: PropTypes.string
            }),
            type: PropTypes.string,
            time: PropTypes.string,
            text: PropTypes.string,
    })
    ).isRequired,
}

export default MessageHistory
