import './GuitarString.css';
import {Fret} from './Fret'
import {useState} from 'react';

export function GuitarString({numFrets, stringNum, fretClick, mutes, setMute}) {
    let offSet = 0;
    const [currentFret, setFret] = useState(0);
    const [currentNote, setNote] = useState("");
    const muteClick = () => {
        setMute(mutes.map((x, idx) => {return idx==stringNum ? !x : x}));
    }
    const fretCallback = (fretNum) => {
        const realFret = currentFret === fretNum ? 0 : fretNum; 
        setFret(realFret);
        return fretClick(stringNum, realFret);
    }
    const createFret = (fretNum) => {
        offSet++;
        return <Fret offSet={offSet} fretClicked={fretCallback} selected={currentFret===offSet}/>
    }

    return (
        <div>
            <div className="guitarString">
                <button className={mutes[stringNum] ? "muteButton" : "muteButton muteButtonSelected"} Text={setNote} onClick= {muteClick} />
                {Array.from({ length: numFrets }).map(x => createFret(offSet))}
            </div>
        </div>
    )
}