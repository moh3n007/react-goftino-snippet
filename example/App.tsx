import * as React from 'react';
import { GoftinoSnippet } from '../src';

const GOFTINO_KEY = process.env.PUBLIC_GOFTINO_KEY as string;

const App = () => {
  // a variable used for show/hide your custom widget
  const [hideButton, setHideButton] = React.useState(false);
  
  return (
    <div>
      <h2>This is a simple example for create your custom widget</h2>
      <h4>click below button to open the chat form</h4>
      <GoftinoSnippet
        goftinoKey={GOFTINO_KEY}
        onReady={() => {
          // when goftino is ready you should hide default widget
          // @ts-ignore
          window.Goftino.setWidget({
            hasIcon: false,
          });
        }}
        onClose={() => {
          // this function runs when the form closes
          // when form closes you should show your custom widget
          setHideButton(false);
        }}
        onSendMessage={message => {
          console.log('send message', message.detail);
        }}
        onGetMessage={message => {
          console.log('get message', message.detail);
        }}
      />
      <button
        onClick={() => {
          // with the below function (open) you can open the chat form
          // @ts-ignore
          window.Goftino.open();
          // then you should hide your custom widget
          setHideButton(true);
        }}
        style={{
          // your custom style
          opacity: hideButton ? 0 : 1,
          visibility: hideButton ? 'hidden' : 'visible',
          transition: 'all 0.15s linear',
          color: 'white',
          backgroundColor: 'red',
          border: '1px solid yellow',
          borderRadius: 8,
          padding: 8,
          cursor: 'pointer',
        }}
      >
        My Custom Widget
      </button>
    </div>
  );
};

export default App;
