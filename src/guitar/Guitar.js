import  {GuitarString} from './GuitarString';
import './Guitar.css';
import {startTone, playNote, convertNote} from './SoundManager'; 

export function Guitar({strings}) {
    const numFrets = 6;
    let toneStarted = false;

    const handleFretClicked = async (note, fretNum) => {
        if (!toneStarted) {
            await startTone();
        }
        playNote(convertNote(note, fretNum), 1.0);
    }
    
    const guitarStrings = Array.from(strings).map(x => <GuitarString numFrets={numFrets} startingNote={x} fretClick={handleFretClicked}/>);

    return (
        <div className="guitar">
            {guitarStrings}
        </div>
    )
}