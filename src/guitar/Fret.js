import './Fret.css';
import {useState} from 'react';

export function Fret({offSet, fretClicked, selected}) {
    const fretCallback = () => {
        return fretClicked(offSet);
    }
    return (
        <button className={selected ? "fretBox selected" : "fretBox"} onClick={fretCallback}/>
    );
}