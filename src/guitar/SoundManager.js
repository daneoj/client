import * as Tone from 'tone';

//const synth = new Tone.PolySynth(Tone.FMSynth).toDestination();
//synth.volume.value = -35;
//synth.set({resonance: 0.99 });
const synths = Array.from({length: 6}, (v, i) => {return new Tone.PluckSynth().toDestination()});
synths.forEach(el => {el.volume.value = -35; el.set({resonance: 0.99})})

const basicNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export function startTone() {
    Tone.start();
}
export function playNotes(stringNums, notes, duration) {
    stringNums.forEach((el, i) => playNote(i, notes[i], duration));
}

export function playNote(stringNum, note, duration) {
    synths[stringNum].triggerRelease(0.15);
    try {synths[stringNum].triggerAttackRelease(note, duration, Tone.now());}
    catch {} // prevent crap library from malding
}

export function convertNote(note, fret) {
    const baseNote = note.substr(0, note.length - 1);
    let octave = Number(note[note.length-1]);

    let searchIdx = basicNotes.findIndex(x => x === baseNote) + fret;
    
    while (searchIdx >= basicNotes.length) {
        searchIdx -= basicNotes.length;
        octave +=1;
    }

    return basicNotes[searchIdx]+String(octave);
}