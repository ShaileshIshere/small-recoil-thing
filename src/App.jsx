
import './App.css'
import Count from "./components/Count.jsx";
import Buttons from "./components/Buttons.jsx";
import { useState } from 'react';
import { CountContext } from './Context.jsx';

import TwoButtons from './components/TwoButtons.jsx';
import Emoji from './components/Emoji.jsx';
import { useRecoilState } from 'recoil';
import { countAtom } from './components/AtomCount.jsx';

function App() {
  // const [count, setCount] = useState(0);
  // return (
    // <>
    //   <CountContext.Provider value={count}>
    //     <Count count = {count} setCount = {setCount} />
    //   </CountContext.Provider>
    // </>
  // )
    
  const [count, setCount] = useRecoilState(countAtom);
  return(
    <>
      <div className='header'>
        <h1>everytime you press on increase there is an additional 4px will be add on to the size of dragon</h1>
      </div>
      <div className='card'>
        <Emoji />
        <TwoButtons /> 
      </div>
    </>
  )
}

export default App
