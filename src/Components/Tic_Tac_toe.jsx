import React from 'react'
import './Tic_Tac_Toe.css'
import CustomHook from  '../CustomHook/CustomHook.jsx'
import o_image from '../assets/O_image.png'
import x_image from '../assets/X_image.png'
const Tic_Tac_toe = () => {
  const { handleClicker,calculateWinner,getStatusMessage,resetGame,isXNext,board}=CustomHook();
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-black h-screen">
      <h1 className="
          text-4xl font-black
  bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500
  bg-clip-text text-transparent
  animate-pulse
  drop-shadow-[0_2px_0_#020617]
  drop-shadow-[0_10px_30px_#9333ea]
  tracking-[0.1em]">
         TIC TAC TOE</h1>

      <h2 className="text-2xl font-bold text-white mt-3 mb-6 px-6 py-3 rounded-xl bg-black/40 backdrop-blur shadow-[0_0_25px_#078262]">
        <span className="text-[#078262] ml-2 animate-pulse">
        {getStatusMessage()}
        </span>
      </h2>
      <div className="grid grid-cols-3 grid-rows-3 h-110 w-100 gap-2">
        {board.map((curr,Index)=>{
           return <button key={Index} className="bg-gradient-to-br from-[#1a002b] via-[#2d033b] to-[#0f3460] text-pink-400 drop-shadow-[0_0_12px_#ec4899] animate-pulse text-3xl font-bold flex justify-center items-center rounded-lg"
           onClick={()=>{handleClicker(Index)}}
           disabled={curr!==null}>{curr}</button>
        })}
      </div>
      <button className="px-6 py-3 rounded-lg font-bold text-cyan-700 bg-gray-900 active:scale-95 active:bg-gray-900 transition"
         onClick={resetGame}>RESET</button>
     
    </div>
  )
}

export default Tic_Tac_toe;
