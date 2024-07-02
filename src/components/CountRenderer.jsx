import { useContext } from "react"
import { CountContext } from "../Context"

// export default function CountRenderer({ count }) {
//     return <div>
//         {count}
//     </div>
// }

// CountRenderer component uses context to display the current count
export default function CountRenderer() {
    // Use context to get the current count value
    const count = useContext(CountContext);

    return <div>{count}</div>;
}