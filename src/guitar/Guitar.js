import  {GuitarString} from './GuitarString';
import './Guitar.css';

export function Guitar({numStrings}) {
    const strings = Array.from({length: numStrings}).map(x => <GuitarString numFrets={6}/>);

    return (
        <div className="guitar">
            {strings}
        </div>
    )
}