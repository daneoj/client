import  {GuitarString} from './GuitarString';
import './Guitar.css';
import {startTone, playNote, playNotes, convertNote} from './SoundManager'; 
import {useEffect, useState} from 'react';
const numFrets = 7;
const noteLength = 1.0;

export function Guitar({strings}) {
    const [toneStarted, setToneStarted] = useState(false);
    const [currentFrets, setFrets] = useState(strings.map((x, idx) => 0));
    const [mutes, setMutes] = useState(strings.map((x, idx) => false));

    useEffect( // want this to run once only
        () => {
            setFrets(strings.map((x, idx) => 0));
        },
        [strings]
    );

    const handleFretClicked = async (stringNum, fretNum) => {
        if (!toneStarted) {
            await startTone();
            setToneStarted(true);
        }
        setFrets(currentFrets.map((x, idx) => {return idx === stringNum ? fretNum : x}));
        playNote(stringNum, convertNote(strings[stringNum], fretNum), noteLength);
    }

    const handlePlayChordClicked = async() => {
        if (!toneStarted) {
            await startTone();
            setToneStarted(true);
        }
        mutes.map((x, idx) => {
            if (!x) {
                playNote(idx, convertNote(strings[idx], currentFrets[idx]), noteLength);
            }
        });
        //playNotes(strings.map((e, i) => i ), currentFrets.map((x, i) => convertNote(strings[i], x)), 1.0);
    }
    
    const guitarStrings = Array.from(strings).map((x, idx) => <GuitarString numFrets={numFrets}
        stringNum={idx} fretClick={handleFretClicked} mutes={mutes} setMute={setMutes} />);

    return (
        <div>
            <div className="guitar">
                {guitarStrings}
            </div>
            <button className="chordBut" onClick={handlePlayChordClicked}> Play Chord </button>
        </div>
    )
}