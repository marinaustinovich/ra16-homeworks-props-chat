export enum MessageTypeEnum {
  RESPONSE = `response`,
  MESSAGE = `message`,
  TYPING = `typing`,
}

export type From = {
  name: string;
};

export type MessageType = {
  type: MessageTypeEnum;
  from: From;
  id: string;
  time: string;
  text?: string;
};
