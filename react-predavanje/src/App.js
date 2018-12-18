import React, { Component } from 'react';
import Repository from './components/repository';
import Article from './components/article';

import './app.sass';
import News from './components/news';

const App = () => (
  <div>
    {/* <div>
      <h1>React.js - predavanje</h1>
      <Repository name="factoryhr/CustomUISwitch"></Repository>
      <Repository name="factoryhr/laravel-attachments"></Repository>
      <Repository name="factoryhr/Http2-Setup"></Repository>
      <Repository name="factoryhr/blog-post-introduction-to-redux-for-web-application-development"></Repository>
      <Repository name="factoryhr/js-workshop"></Repository>
    </div> */}
    <div>
      <h1>React.js - zadatak</h1>
      <News keyword="reactjs"></News>
    </div>
  </div>
)

export default App
