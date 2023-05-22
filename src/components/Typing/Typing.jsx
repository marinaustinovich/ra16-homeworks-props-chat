import React from 'react'
import PropTypes from 'prop-types'

function Typing(props) {
    const { from, message } = props;
    return (
        <li id={message.id}>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div><i className="fa fa-circle typing"  style={{opacity: 1}}></i><i className="fa fa-circle typing"  style={{opacity: 0.6}}></i><i className="fa fa-circle typing" style={{opacity: 0.3}}></i></div>
        </li>
    );
}

Typing.propTypes = {
    from: PropTypes.shape({
        name: PropTypes.string
    }),
    message: PropTypes.shape({
        id: PropTypes.string,
        time: PropTypes.string,
    })
}

export default Typing
