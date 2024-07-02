import { selector } from "recoil";
import { countAtom } from './AtomCount';

export const fontSizeSelector = selector({
    key: 'font-size-selector',
    get: ({get}) => {
        const count = get(countAtom)
        const fontSize = count*4
        return fontSize;
    }
})