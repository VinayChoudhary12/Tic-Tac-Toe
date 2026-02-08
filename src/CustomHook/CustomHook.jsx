import React from 'react'
import {useState } from 'react'
const initialBoard =()=>Array(9).fill(null);
const CustomHook = () => {
    const [isXNext,setIsXNEXT] =useState(true);
    const  [board,setBoardValue] =useState(initialBoard());

      const WinningPattern=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [2,5,8],
        [6,7,8],
        [6,4,2],
        [3,4,5],
        [1,4,7],
      ]

   const calculateWinner = (currentBoard)=>{
    for(let i=0;i<WinningPattern.length;i++){
           const [a,b,c]=WinningPattern[i];
           if(currentBoard[a]&&currentBoard[a]===currentBoard[b]&& currentBoard[b]===currentBoard[c]){
             return `${currentBoard[a]}`;
           }
    }
    return null;
}

    const handleClicker = (Index)=> {
        const Winner=calculateWinner(board);
        console.log(Winner)
        if(Winner||board[Index]) return;

        const newBoard =[...board]
        newBoard[Index]=isXNext?"X":"O"
        setBoardValue(newBoard);
        setIsXNEXT(!isXNext);
      }

   
     const getStatusMessage =()=>{
        const win=calculateWinner(board);
        if(win){
            return `Player ${win}'s Wins!`;
        }else if(!board.includes(null)){
            return "It's a Draw!";
        }
        else{
            return `Player ${isXNext?"X":"O"}'s Turn`;
        }

     }

     const resetGame =()=>{
          setBoardValue(initialBoard());
          setIsXNEXT(true);
     }

     return {handleClicker,calculateWinner,getStatusMessage,resetGame,isXNext,board,WinningPattern}
}
export default CustomHook;