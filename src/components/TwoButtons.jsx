import { useResetRecoilState, useSetRecoilState } from "recoil";
import { countAtom } from './AtomCount';

export default function TwoButtons() {
    const setCount = useSetRecoilState(countAtom);
    const resetCount = useResetRecoilState(countAtom);
    return(
        <div>
            <button onClick={() => {
                setCount(count => count+1)
            }}>Increase size</button>
            <button onClick={resetCount}>reset</button>
        </div>
    )
}