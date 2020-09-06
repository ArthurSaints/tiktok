import React from "react";

import MusicNoteIcon from '@material-ui/icons/MusicNote';

import "./VideoFooter.css";

export default function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@arthursantosgc</h3>
                <p>This is some description</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon" />
                </div>
            </div>
        </div>
    );
}