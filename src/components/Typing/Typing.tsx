import React from "react";
import { MessageType } from "../../types/types";

export type MessageDataProps = {
  message: MessageType;
};

export const Typing = ({ message }: MessageDataProps) => (
  <li id={message.id}>
    <div className="message-data">
      <span className="message-data-name">
        <i className="fa fa-circle online"></i>
        {message.from.name}
      </span>
      <span className="message-data-time">{message.time}</span>
    </div>
    <div>
      <i className="fa fa-circle typing" style={{ opacity: 1 }}></i>
      <i className="fa fa-circle typing" style={{ opacity: 0.6 }}></i>
      <i className="fa fa-circle typing" style={{ opacity: 0.3 }}></i>
    </div>
  </li>
);
