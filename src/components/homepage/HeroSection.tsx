// @ts-ignore
import React, {useEffect, useState} from "react";
import {GuidesAndSamples} from "./GuidesAndSamples";
import TextTransition, {presets} from "react-text-transition";

const text = {
    bandits_remix: {
        link: "https://www.youtube.com/watch?v=QCnOjOjgSu0",
        time: 1500,
        lines: ["One thousand dollars is one band", "Ten bands is one rack", "Ten racks is a brick (haha)", "A brick, is a hundred thousand dollars",],
    }, slow_jamz: {
        link: "https://youtu.be/pwkYUhePecQ?si=4vrIMaYHrBC9jIdG&t=75",
        time: 1800,
        lines: ["She got a light skin friend, look like Michael Jackson.", "Got a dark skin friend, look like Michael Jackson",],
    }, problematic: {
        link: "https://youtu.be/qHlYdVzFX8c?si=KDG-1Dy3TqnLWVYe&t=21",
        time: 1500,
        lines: ["They lookin' like prey,", "I guess that's why they prayin'"],
    }, winners: {
        link: "https://x.com/KanyeYezzus/status/531820111611834368",
        time: 8000,
        lines: ["I need a room full of mirrors so I can be surrounded by winners."],
    },
};

function getRandomSong(exclude = []) {
    const songKeys = Object.keys(text).filter(key => !exclude.includes(key));
    const randomSongKey = songKeys[Math.floor(Math.random() * songKeys.length)];
    return text[randomSongKey];
}

export default function HeroSection() {
    const [currentSong, setCurrentSong] = useState(text.winners);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [songQueue, setSongQueue] = useState(["winners"]);

    useEffect(() => {
        const nextSong = () => {
            let nextSongKey: string;

            if (songQueue.length > 0) {
                nextSongKey = songQueue[0];
                setSongQueue(songQueue.slice(1)); // Create a new array without mutating the original
            } else {
                const randomSong = getRandomSong(["winners"]);
                nextSongKey = Object.keys(text).find(key => text[key].link === randomSong.link);
            }

            if (nextSongKey) {
                setCurrentSong(text[nextSongKey]);
                setCurrentLineIndex(0);
            }
        };

        const intervalId = setInterval(() => {
            if (currentLineIndex < currentSong.lines.length - 1) {
                setCurrentLineIndex(prevIndex => prevIndex + 1);
            } else {
                nextSong();
            }
        }, currentSong.time);

        return () => clearInterval(intervalId);
    }, [currentSong, currentLineIndex, songQueue]);

    const openLinkInNewTab = () => {
        window.open(currentSong.link, "_blank");
    };

    return (<div className="noise-bg-faded no-underline-links px-4 pt-8 lg:py-0 h-screen overflow-y-auto">
        <section className="flex flex-col items-center justify-center py-32">
            <h1 className="font-jakarta text-7xl font-bold">Arteii - Ben</h1>
            <h2 onClick={openLinkInNewTab} style={{cursor: "pointer"}}>
                <TextTransition
                    className="text-center text-text-400 text-sm mt-2"
                    springConfig={presets.wobbly}
                >
                    NOT a Web Dev
                    {/*{currentSong.lines[currentLineIndex % currentSong.lines.length]}*/}
                </TextTransition>
            </h2>
        </section>
        <GuidesAndSamples/>
    </div>);
}
