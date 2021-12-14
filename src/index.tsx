import React, { FC, useEffect } from 'react';

export type IGetMessageType = 'text' | 'file' | 'voice';

export type ISendMessageType =
  | IGetMessageType
  | 'startForm'
  | 'delayForm'
  | 'offlineForm';

export interface IContentForm {
  label: string;
  value: string;
}

export interface ISendMessageDetail {
  type: ISendMessageType;
  content: string | IContentForm[]; // if type equals to 'text', 'file' or 'voice', type would be string otherwise array
}

export interface ISendMessage {
  detail: ISendMessageDetail;
}

export interface IGetMessageDetail {
  type: IGetMessageType;
  content: string;
}

export interface IGetMessage {
  detail: IGetMessageDetail;
}

export interface IGoftinoProps {
  goftinoKey: string;
  onReady?: () => void;
  onOpen?: () => void;
  onClose?: () => void;
  onSendMessage?: (message: ISendMessage) => void;
  onGetMessage?: (message: IGetMessage) => void;
}

export const GoftinoSnippet: FC<IGoftinoProps> = props => {
  const {
    goftinoKey,
    onReady,
    onOpen,
    onClose,
    onSendMessage,
    onGetMessage,
  } = props;

  useEffect(() => {
    // an event when goftino is ready
    if (!!onReady) {
      window.addEventListener('goftino_ready', function() {
        onReady();
      });
    }

    // An event for when the user sent a message
    if (!!onSendMessage) {
      window.addEventListener('goftino_sendMessage', function(d: any) {
        onSendMessage(d);
      });
    }

    // An event for when a new message receives
    if (!!onGetMessage) {
      window.addEventListener('goftino_getMessage', function(d: any) {
        onGetMessage(d);
      });
    }

    // An event for when the form opens
    if (!!onOpen) {
      window.addEventListener('goftino_openWidget', function() {
        onOpen();
      });
    }

    // An event for when the form closes
    if (!!onClose) {
      window.addEventListener('goftino_closeWidget', function() {
        onClose();
      });
    }
  }, [onReady, onOpen, onClose, onSendMessage, onGetMessage]);

  useEffect(() => {}, [onClose]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = !0;
    script.referrerPolicy = 'no-referrer-when-downgrade';
    script.src = `https://www.goftino.com/widget/${goftinoKey}?o=goftino`;
    document.body.appendChild(script);
  }, []);

  return <></>;
};
