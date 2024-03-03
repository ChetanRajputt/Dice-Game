import React, { useEffect, useState } from 'react'
import { FaDiceFive,FaDiceOne,FaDiceTwo ,FaDiceThree,FaDiceFour,FaDiceSix    } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  const gamingBg = `https://images.squarespace-cdn.com/content/v1/643a46f5ea370f056b1d179c/cdd89217-bbac-4543-996d-8eaa4b88d353/Dark-BG-1.jpg`;


  const [toggle, setToggle] = useState(true);

  const [userNumber, setUserNumber] = useState("");
  const [pcNumber, setPcNumber] = useState(1);
  const [totalCount, setTotalCount] = useState(0);


  const playGame = () => {

    const start = new Audio("play.mp3");
    const plus = new Audio("plus.mp3");
    const minus = new Audio("minus.mp3");
    const error = new Audio("error.mp3");

    if (userNumber === "") {
      toast.error("Please Select Number !", {
        position: "top-left"
      });
      error.play();
      return;
    }

    start.play();

    const pc = Number.parseInt(Math.floor(Math.random() * 6) + 1);
    setPcNumber(pc);

    if (pc === userNumber) {
      setTotalCount(prevCount => prevCount + pc + 5);
      toast.success(`${pc + 5} Points !`, {
        position: "top-left"
      });
      plus.play();
    }
    else {
      setTotalCount(prevCount => prevCount - 1);
      toast.warn("1 Points Decrease !", {
        position: "top-left"
      });
      minus.play();
    }
    setUserNumber("");
  }

  return (
    <main className='h-screen w-full bg-cover saturate-150 bg-center blur-[2%]'
      style={{ backgroundImage: `url(${gamingBg})` }}>

      <div className='flex justify-center pr-5 flex-col items-end'>
        <div className='flex items-center justify-center flex-col'>
          <h2 className='text-white font-bold text-4xl'>{totalCount}</h2>
          <p className='text-pink-500 text-xl font-semibold underline'>Total Score</p>
        </div>
      </div>

      <div className='flex flex-col-reverse pt-8 items-center justify-center'>
        <div className='flex items-center text-white font-bold gap-4 justify-end pt-4 pr-12'>
          <button onClick={() => setUserNumber(1)} className='border px-4  py-2 rounded   hover:bg-white hover:text-black duration-500 shadow-xl'>1</button>
          <button onClick={() => setUserNumber(2)} className='border px-4  py-2 rounded shadow-2xl hover:bg-white hover:text-black duration-500 '>2</button>
          <button onClick={() => setUserNumber(3)} className='border px-4  py-2 rounded shadow-2xl hover:bg-white hover:text-black duration-500 '>3</button>
          <button onClick={() => setUserNumber(4)} className='border px-4  py-2 rounded shadow-2xl hover:bg-white hover:text-black duration-500 '>4</button>
          <button onClick={(e) => setUserNumber(5)} className='border px-4  py-2 rounded shadow-2xl hover:bg-white hover:text-black duration-500 '>5</button>
          <button onClick={() => setUserNumber(6)} className='border px-4  py-2 rounded shadow-2xl hover:bg-white hover:text-black duration-500 '>6</button>
        </div>
        <div className='text-3xl from-bold text-pink-500 font-mono underline'>
          <h1>
            Select Number
          </h1>
        </div>
      </div>

      <ToastContainer autoClose={3000} />

      <div className='flex items-center gap-5 flex-col justify-center my-12'>
        <div onClick={playGame} className=' cursor-pointer shadow-2xl  duration-700 text-pink-500'>
          {
            pcNumber === 1 &&
            <FaDiceOne  size={150} />
          }
          {
            pcNumber === 2 &&
            <FaDiceTwo  size={150} />
          }
          {
            pcNumber === 3 &&
            <FaDiceThree  size={150} />
          }
          {
            pcNumber === 4 &&
            <FaDiceFour  size={150} />
          }
          {
            pcNumber === 5 &&
            <FaDiceFive size={150} />
          }
          {
            pcNumber === 6 &&
            <FaDiceSix  size={150} />
          }
        </div>
        <div>
          <p className='text-white font-mono text-xl font-semibold mt-4'>Click On Dice to roll</p>
        </div>
        <div className='flex gap-6 flex-col'>
          <button onClick={() => setTotalCount(0)} className='bg-gradient-to-r from-pink-500 to-indigo-700 hover:from-blue-700 hover:to-green-700 text-white px-4 py-3 rounded duration-300 text-xl font-bold font-serif w-[300px]'>Reset Score</button>
          <button onClick={() => setToggle(true)} className='bg-gradient-to-b from-blue-700 to-green-700 text-white px-4 py-3 rounded duration-300 text-xl font-bold font-serif w-[300px]'>Show Rules</button>
        </div>
      </div>


      {/* modals */}

      {
        toggle &&
        <div className='w-full absolute top-0 left-0 flex items-center justify-center'>
          <div className='bg-gradient-to-t px-3  py-8 rounded-lg mt-8 gap-5 flex flex-col from-pink-500 to-indigo-700'>
            <div className='flex items-center justify-between'>
              <h1 className='text-5xl font-bold'>How to Play Master Dice Game ?</h1>
              <button onClick={() => setToggle(false)}><IoMdCloseCircle size={50} className='text-red-500' /></button>
            </div>
            <h1 className='text-3xl font-semibold text-white text-center underline  '>Instructions</h1>
            <p className='font-mono text-yellow-500 text-xl font-bold'>1. Select any Number</p>
            <p className='font-mono text-yellow-500 text-xl font-bold'>2. Click On Dice Image</p>
            <p className='font-mono text-yellow-500 text-xl font-bold'>3. After click on dice if selected number is equal to dice number you will get same point as dice</p>
            <p className='font-mono text-yellow-500 text-xl font-bold'>4. If you get Wrong guess then 1 point will be dedcuted.</p>
          </div>
        </div>
      }
    </main>
  )
}

export default Home
