import * as Tone from 'tone';

const synth = new Tone.PolySynth(Tone.FMSynth).toDestination();
synth.volume.value = -10;

synth.set({resonance: 0.99 });

const basicNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export function startTone() {
    Tone.start();
}
export function playNote(note, duration) {
    synth.triggerAttackRelease(note, duration, Tone.now());
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