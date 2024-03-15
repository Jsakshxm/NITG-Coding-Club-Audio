"use client"
import React, { useRef, useEffect } from 'react';

const LoopingAudio = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; // Set loop to true

    const handleEnded = () => {
      audio.play(); // Restart playback when audio ends
    };

    audio.addEventListener('ended', handleEnded);

    // Clean up event listener on unmount
    return () => audio.removeEventListener('ended', handleEnded);
  }, [src]); // Update effect only when src changes

  return (<><div className='flex justify-center p-2 m-2'>
    <h1 className='text-4xl font-bold '>NIT GOA Coding Club Audio Player</h1> </div>
    <div className='flex justify-center mt-32 '>
    <audio ref={audioRef} src="audio.mp3" preload="auto" controls className='w-72'>
      Your browser does not support the audio element.
    </audio> </div> 
    <div className='flex justify-center pt-[550px] text-lg font-extralight '>Made with Love❤️</div> </>
  );
};

export default LoopingAudio;
