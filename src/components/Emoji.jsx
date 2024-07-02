import { useRecoilValue } from "recoil";
import { countAtom } from './AtomCount';
import { fontSizeSelector } from './Selector';

export default function Emoji() {
    const count = useRecoilValue(countAtom);
    const fontSize = useRecoilValue(fontSizeSelector);
    return(
        <div>
            <h1>The counters count : {count}</h1>
            <h2>The size of this emoji : {fontSize} px</h2>
            <p style={{fontSize : fontSize}}>🐉</p>
        </div>
    )
}