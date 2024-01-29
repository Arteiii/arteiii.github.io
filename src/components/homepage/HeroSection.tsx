import React, { useState, useEffect } from "react";
import { GuidesAndSamples } from "./GuidesAndSamples";
import TextTransition, { presets } from "react-text-transition";

const text = {
  Lift_Yourself: {
    link: "https://www.youtube.com/watch?v=8fbyfDbi-MI",
    lines: [
      "Poopy-di scoop",
      "Scoop-diddy-whoop",
      "Whoop-di-scoop-di-poop",
      "Poop-di-scoopty",
      "Scoopty-whoop",
      "Whoopity-scoop, whoop-poop",
      "Poop-diddy, whoop-scoop",
      "Poop, poop",
      "Scoop-diddy-whoop",
      "Whoop-diddy-scoop",
      "Whoop-diddy-scoop, poop",
      // Weitere Zeilen für Song A
    ],
  },
  Ich_feier_den_scheiss: {
    link: "https://www.youtube.com/watch?v=BF7HfAvybCk",
    lines: [
      "Frankfurt am Main, Gang, Gang",
      "Meine Jungs machen groß, deine Jungs sind broke",
      "Alle sind auf Koks, sie sind alle auf Dope",
      "Wenn die Sonne aufgeht, geht die Party erst los",
      "Hab' Ballermann dabei, alle druff im Bando",
      "Vierzig Mille rip in 'nem Hotel",
      "Drei Tage kein'n Schlaf im Opel",
    ],
  },
  ORCA_FREESTYLE: {
    link: "https://genius.com/Absent-orca-freestyle-lyrics",
    lines: [
      "Ich schwimm' wie ein Orca und all deine Chains blinken so fake, ich kauf' dir kein Wort ab",
      "Immer nur hoch, Bruder, verlieren ist nicht in mei'm Wortschatz (Ja)",
      "Geht's um mein Team, lass' ich nix durch, ich fühl' mich wie'n Torwart (Woah)",
      "Ich hätte 'ne Fußballerline droppen könn'n, aber kenn' keine Spielernam'n",
      "Hah, oh mein Gott, er ist wieder da, wieder Mikrofon, wieder Heat gemacht",
      "Wieder Kippchen an und an sie gedacht (Jaa)",
      "Fick' deine Party, ich häng' mit zehn Junkies, Loner, Crocodile Dundee",
      "Ich will nur Liebe — Mahatma Gandhi, du willst ein G sein, ja, find' ich funny,",
    ],
  },
  ORCA_sFREESTYLE: {
    link: "https://www.youtube.com/watch?v=KiuZAAFAvA4",
    lines: [
      "Ready? Go!",
      "Man, I roll up a blunt and start smokin' that shit",
      "'Cause I don't give a fuck and I don't give a Fick",
      "Man, I flow like a flood and I'm so goddamn quick",
      "And you're slow like a slug, you don't know how to spit",
      "But you know I'm the best and there's no need to test me",
      "I'm soaked in my swag and my flow is a blessing",
      "I don't even pray to the god that you pray to",
      "But if there's a mirror, I'm folding my hands too",
      "'Cause I know the pretty boy in the reflection",
      "Is gonna be the god of all the gods with no question",
    ],
  },
  bandits_remix: {
    link: "https://www.youtube.com/watch?v=QCnOjOjgSu0",
    lines: [
      "One thousand dollars is one band",
      "Ten bands is one rack",
      "Ten racks is a brick (haha)",
      "A brick, is a hundred thousand dollars (Aye, yuh)",
    ],
  },
  Dias_Freestyle: {
    link: "https://www.youtube.com/watch?v=OOJvJBdjXsc",
    lines: [
      "Poppe Diaz und mir geht's prima",
      "Teile gerne, habe viel da, Nike, kein Adidas",
      "Rote Augen wie Uchiha, so sind Berliner",
      "Louis Fake, doch Scheine lila, exe ein'n Liter",
      "Fick' dein Bierball",
      "Kette scheint, weiße Nikes",
      "Steige in den Tesla ein, hah, aight",
      "Deine Bitch hat mich als Klingelton, keinen Bock auf Mindestlohn",
    ],
  },
};

function getRandomSong() {
  const songKeys = Object.keys(text);
  const randomSongKey = songKeys[Math.floor(Math.random() * songKeys.length)];
  return text[randomSongKey];
}

export default function HeroSection() {
  const [currentSong, setCurrentSong] = useState(getRandomSong());
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const nextSong = () => {
      setCurrentSong(getRandomSong());
      setCurrentLineIndex(0);
    };

    const intervalId = setInterval(() => {
      if (currentLineIndex < currentSong.lines.length - 1) {
        setCurrentLineIndex((prevIndex) => prevIndex + 1);
      } else {
        nextSong();
      }
    }, 2000); // every 2 seconds

    return () => clearInterval(intervalId);
  }, [currentSong, currentLineIndex]);

  const openLinkInNewTab = () => {
    window.open(currentSong.link, "_blank");
  };

  return (
    <div className="noise-bg-faded no-underline-links px-4 pt-8 lg:py-0 h-screen overflow-y-auto">
      <section className="flex flex-col items-center justify-center py-32">
        <h1 className="font-jakarta text-7xl font-bold">Arteii - Ben</h1>
        <h2 onClick={openLinkInNewTab} style={{ cursor: "pointer" }}>
          <TextTransition className="text-center text-text-400 text-sm mt-2" inline={true} springConfig={presets.wobbly}>
            {currentSong.lines[currentLineIndex % currentSong.lines.length]}
          </TextTransition>
        </h2>
      </section>
      <GuidesAndSamples />
    </div>
  );
}