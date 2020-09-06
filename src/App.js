import React from 'react';
import './App.css';

import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <h1>Full stack MERN tiktok clone</h1>

      <div className="app__videos">
        <Video />
        <Video />
      </div>

      { /* app container */}
      { /* videos */}
      { /* <Video /> */}
      { /* <Video /> */}
      { /* <Video /> */}
      { /* <Video /> */}

    </div>
  );
}

export default App;
