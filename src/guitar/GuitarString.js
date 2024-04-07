const fretBox = {
    color: "gray",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    width: "70px",
    height: "50px"
};

export function Fret() {
    return (
        <button style={fretBox}/>
    );
}

export function GuitarString({numFrets}) {
    const frets = Array.from({length: numFrets}).map(x => <Fret/>);

    return (
        <div>
            {frets}
        </div>
    )
}