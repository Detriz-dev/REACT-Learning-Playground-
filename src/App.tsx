import './App.css'
import {Stacklist} from './components/StackList/index.tsx'
import { ArrayMethodMap } from './components/ArrayMethodMap.tsx'  
import { ArrayMethodSet} from './components/ArrayMethodSet.tsx' 
 


function App() {

  return (
    <>
    <ArrayMethodMap />
    <ArrayMethodSet />

    <div> <Stacklist name="raz" surname="daw"/> </div>
    </>
  )

  }
export default App

 