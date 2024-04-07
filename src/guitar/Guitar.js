import  {GuitarString} from './GuitarString';

export function Guitar({numStrings}) {
    const strings = Array.from({length: numStrings}).map(x => <GuitarString numFrets={10}/>);

    return (
        <div>
            {strings}
        </div>
    )
}