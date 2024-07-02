import CountRenderer from "./CountRenderer";
import Buttons from "./Buttons";

export default function Count({ count, setCount }) {
    console.log("count re-rendered");
    return <div>
        <CountRenderer />
        <Buttons setCount = {setCount}/>
    </div>
}