import { useContext } from "react";
import { CountContext } from "../Context";

// export default function Buttons({ count, setCount }) {
//     return <div>
//         <button onClick={() => {
//             setCount(count + 1);
//         }}>Increase</button>

//         <button onClick={() => {
//             setCount(count - 1);
//         }}>Decrease</button>
//     </div>
// }

// Buttons component receives setCount as a prop
export default function Buttons({ setCount }) {
    // Use context to get the current count value
    const count = useContext(CountContext);

    return (
      <div>
        {/* Button to increase the count */}
        <button onClick={() => setCount(count + 1)}>Increase</button>
        {/* Button to decrease the count */}
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    );
}