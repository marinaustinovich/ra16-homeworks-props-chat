import React from 'react'
import PropTypes from 'prop-types'

function Message(props) {
    const { from, message } = props;
    return (
        <li id={message.id}>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div className="message my-message">{message.text}</div>
        </li>
    )
}

Message.propTypes = {
    from: PropTypes.shape({
            name: PropTypes.string
        }),
    message: PropTypes.shape({
        id: PropTypes.string,
        time: PropTypes.string,
        text: PropTypes.string,
    })
}

export default Message
