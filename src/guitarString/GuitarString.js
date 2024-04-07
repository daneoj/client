const fretBox = {
    color: "gray",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    width: "70px",
    height: "50px"
};

function Fret() {
    return (
        <button style={fretBox}/>
    );
}

export default function GuitarString() {
    return (
        <Fret></Fret>
    )
}