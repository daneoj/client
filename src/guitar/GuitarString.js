import './GuitarString.css';

export function Fret() {
    return (
        <button className="fretBox"/>
    );
}

export function GuitarString({numFrets}) {
    const frets = Array.from({length: numFrets}).map(x => <Fret/>);

    return (
        <div className="guitarString">
            {frets}
        </div>
    )
}