import React from "react";
import { MessageDataProps } from "../Typing";

type Props = MessageDataProps & {
  isResponse?: boolean;
};

export const UnifiedMessage = ({ message, isResponse }: Props) => (
  <li className={`clearfix ${isResponse ? "align-right" : ""}`} id={message.id}>
    <div className={`message-data ${isResponse ? "align-right" : ""}`}>
      {isResponse && <i className="fa fa-circle me"></i>}
      <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
      <span className="message-data-name">{message.from.name}</span>
      {!isResponse && <i className="fa fa-circle online"></i>}
    </div>
    <div
      className={`message ${
        isResponse ? "other-message float-right" : "my-message"
      }`}
    >
      {message.text}
    </div>
  </li>
);
