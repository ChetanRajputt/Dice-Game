import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {

  const backgroundImage = "https://images.squarespace-cdn.com/content/v1/643a46f5ea370f056b1d179c/cdd89217-bbac-4543-996d-8eaa4b88d353/Dark-BG-1.jpg";

  useEffect(() => {
    const backgroundMusic = new Audio("bgmusic.mp3");
    backgroundMusic.play();
    return () => {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
    };
  });

  return (
    <main
      className='h-screen bg-cover bg-center flex items-center justify-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <img src="dice-group.png" className='opacity-80' alt="dice" loading='lazy' />
        <div>
          <Link to={"/home"}>
            <button className='bg-gradient-to-r from-red-500 to-yellow-500 hover:from-blue-700 hover:to-green-700 text-white px-4 py-6 rounded-full duration-300 text-xl font-bold font-serif w-full'>Play Now</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Welcome;
