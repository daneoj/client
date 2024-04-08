import './GuitarString.css';

export function Fret({offSet, fretClicked}) {
    const fretCallback = () => {
        return fretClicked(offSet);
    }
    return (
        <button className="fretBox" onClick={fretCallback}/>
    );
}

export function GuitarString({numFrets, startingNote, fretClick}) {
    let offSet = 0;
    const fretCallback = (fretNum) => {
        return fretClick(startingNote, fretNum);
    }
    const createFret = (fretNum) => {
        offSet++;
        return <Fret offSet={offSet} fretClicked={fretCallback}/>
    }

    return (
        <div className="guitarString">
            {Array.from({length: numFrets}).map(x=> createFret(offSet))}
        </div>
    )
}