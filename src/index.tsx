import React, { FC, useEffect } from 'react';

export interface IGoftinoProps {
  goftinoKey: string;
  onReady?: () => void;
}

export const GoftinoSnippet: FC<IGoftinoProps> = props => {
  const { goftinoKey, onReady } = props;

  useEffect(() => {
    if (!!onReady) {
      window.addEventListener('goftino_ready', function() {
        onReady();
      });
    }
  }, [onReady]);

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
