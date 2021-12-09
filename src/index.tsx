import React, { FC, useEffect } from 'react';

export interface IGoftinoProps {
  goftinoKey: string;
  onReady?: () => void;
  onOpen?: () => void;
  onClose?: () => void;
}

export const GoftinoSnippet: FC<IGoftinoProps> = props => {
  const { goftinoKey, onReady, onOpen, onClose } = props;

  useEffect(() => {
    // an event when goftino is ready
    if (!!onReady) {
      window.addEventListener('goftino_ready', function() {
        onReady();
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
  }, [onReady, onOpen, onClose]);

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
