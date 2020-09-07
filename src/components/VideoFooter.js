import React from "react";
import Ticker from "react-ticker";

import MusicNoteIcon from '@material-ui/icons/MusicNote';

import "./VideoFooter.css";

export default function VideoFooter() {
    const song = "Icon by Jaden Smith";

    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@arthursantosgc</h3>
                <p>This is some description</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon
                        className="videoFooter_icon" />

                    <Ticker mode="smooth" speed={5}>
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
            />
        </div>
    );
}