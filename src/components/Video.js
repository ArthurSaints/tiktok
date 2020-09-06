import React, { useRef, useState } from "react";

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
                src="https://v16m.tiktokcdn.com/a12af41c35eea865ad8ba2c6df99ec4a/5f554179/video/tos/useast2a/tos-useast2a-pve-0068/df91e65875e8443387d62ce46707f765/?a=1233&br=1748&bt=874&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009061407070101902090881605A174&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajxpa2t3ZXI1dTMzNTczM0ApPDk3M2Y4ZDtkNzM3NTs3NWdmZXNuXzZhLWpfLS1fMTZzcy5jLTQvXjUwMzItYTAuLS06Yw%3D%3D&vl=&vr=">
            </video>

            {/* video footer */}
            {/* video sidebar */}
        </div>
    );
}