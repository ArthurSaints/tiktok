import React, { useRef, useState } from "react";

import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

import "./Video.css";

export default function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video
                onClick={handleVideoPress}
                className="video__player"
                loop
                ref={videoRef}
                src="https://v16m.tiktokcdn.com/3689b15c0c35a41371fa7437a1388abd/5f567a11/video/tos/useast2a/tos-useast2a-ve-0068c001/66b4be845b5f44b793d5e52cbcc5900c/?a=1233&br=1876&bt=938&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090712204501018907203433007189&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anRyZ2psaXhydzMzPDczM0ApMztkNDw8NWQ6NzRpZzg7Z2c2NF5jMWtkaDNfLS0zMTZzczE1MV42LmMyLTM2NjJgMF86Yw%3D%3D&vl=&vr=">
            </video>

            <VideoSidebar></VideoSidebar>
            <VideoFooter></VideoFooter>
        </div>
    );
}