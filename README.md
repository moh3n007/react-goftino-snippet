# @mohsen007/react-goftino

> A component simplifies Goftino widget usage in your React application

[![NPM version](https://img.shields.io/badge/npm-v0.1.0-blue)]()

## Introduction

This component applies to Goftino Web Widget including contact form, live chat, talk, answer bot and help center. For more information on widget and API, please check [Goftino official documentation](https://www.goftino.com/docs)

## Installation

#### with npm

```sh
npm i @mohsen007/react-goftino
```

#### with yarn

```sh
yarn add @mohsen007/react-goftino
```

## Component Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { GoftinoSnippet } from '@mohsen007/react-goftino';
const GOFTINO_KEY = 'your goftino embed key';

const App = () => {
  return (
    <GoftinoSnippet
      goftinoKey={GOFTINO_KEY}
      onReady={() => {
        window.Goftino.setWidget({
          hasIcon: false,
        });
      }}
    />
  );
};

ReactDOM.render(<App />, document.getElementById('#app'));
```

## License

MIT
