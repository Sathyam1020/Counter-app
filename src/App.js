import { useState } from "react";

import "./App.css";

function App() {
  
  const [count, setCount] = useState(0);
  
  const decreaseHandler = () => {
    if(count > 0){
      setCount(count-1);
    }
  }
  
  const increaseHandler = () => {
    setCount(count+1)
  }

  const resetHandler = () => {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col
     gap-10">

       <div className="text-[#0398d4] font-medium text-2xl">Increment and Decrement</div>


       <div className="flex justify-center gap-12 py-3 bg-white rounded-sm text-[25px] text-[#344151]">
         <button onClick={decreaseHandler} className="text-center border-r-2 w-20 border-[#bfbfbf] text-5xl">-</button>
         <div className="gap-12 text-5xl font-bold">
            {count}
         </div>
         <button onClick={increaseHandler} className="text-center border-l-2 w-20 border-[#bfbfbf] text-5xl">+</button>
       </div>


       <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
    </div>
  );
}

export default App;