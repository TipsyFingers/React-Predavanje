import React, { Component } from 'react';
import Repository from './components/repository';

import './app.sass';

const App = () => (
  <div className="App Wrapper">
    <h1>React.js</h1>
    <Repository name="factoryhr/CustomUISwitch"></Repository>
    <Repository name="factoryhr/laravel-attachments"></Repository>
    <Repository name="factoryhr/Http2-Setup"></Repository>
    <Repository name="factoryhr/blog-post-introduction-to-redux-for-web-application-development"></Repository>
    <Repository name="factoryhr/js-workshop"></Repository>
  </div>
)

export default App
