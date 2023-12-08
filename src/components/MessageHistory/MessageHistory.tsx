import React from "react";
import { Typing } from "../Typing";
import { MessageType, MessageTypeEnum } from "../../types/types";
import { UnifiedMessage } from "../Message/Message";

type Props = {
  list?: MessageType[];
};

export const MessageHistory = ({ list = [] }: Props) => {
  if (list.length === 0) return null;

  return (
    <ul>
      {list.map((message) =>
        message.type === MessageTypeEnum.TYPING ? (
          <Typing key={message.id} message={message} />
        ) : (
          <UnifiedMessage
            key={message.id}
            message={message}
            isResponse={message.type === MessageTypeEnum.RESPONSE}
          />
        )
      )}
    </ul>
  );
};
