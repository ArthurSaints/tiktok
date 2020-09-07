import React from 'react';
import './App.css';

import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <h1>Full stack MERN tiktok clone</h1>

      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/3689b15c0c35a41371fa7437a1388abd/5f567a11/video/tos/useast2a/tos-useast2a-ve-0068c001/66b4be845b5f44b793d5e52cbcc5900c/?a=1233&br=1876&bt=938&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090712204501018907203433007189&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anRyZ2psaXhydzMzPDczM0ApMztkNDw8NWQ6NzRpZzg7Z2c2NF5jMWtkaDNfLS0zMTZzczE1MV42LmMyLTM2NjJgMF86Yw%3D%3D&vl=&vr="
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
