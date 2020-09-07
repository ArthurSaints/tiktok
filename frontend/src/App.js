import React from 'react';
import './App.css';

import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <h1>Full stack MERN tiktok clone</h1>

      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/ade2354e8ee8edf17a0b0c91a768b0cd/5f56f56b/video/tos/useast2a/tos-useast2a-ve-0068c002/397f88561c6c43aba67d4e4c38a0e227/?a=1233&br=1890&bt=945&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200907210703010189073097411D70F5&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3Z1O3d1c3Q4dTMzNTczM0ApZjs7NDpmNDw3N2llaTM5NGdva2RlZmNkbHNfLS0tMTZzczIwXjAyNDYvMF8uL2M1LTU6Yw%3D%3D&vl=&vr="
          channel="arthursantosgc"
          description="This is a tiktok clone dude!"
          song="Icon by Arthur Santos"
          likes={167}
          messages={34}
          shares={17}
        />
      </div>

    </div>
  );
}

export default App;
