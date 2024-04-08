import './GuitarString.css';
import {useState} from 'react';

export function Fret({offSet, fretClicked, selected}) {
    const fretCallback = () => {
        return fretClicked(offSet);
    }
    return (
        <button className={selected ? "fretBox selected" : "fretBox"} onClick={fretCallback}/>
    );
}

export function GuitarString({numFrets, stringNum, fretClick}) {
    let offSet = -1;
    const [currentFret, setFret] = useState(0);
    const fretCallback = (fretNum) => {
        setFret(fretNum);
        return fretClick(stringNum, fretNum);
    }
    const createFret = (fretNum) => {
        offSet++;
        return <Fret offSet={offSet} fretClicked={fretCallback} selected={currentFret===offSet}/>
    }

    return (
        <div className="guitarString">
            {Array.from({length: numFrets}).map(x=> createFret(offSet))}
        </div>
    )
}