import React, {useState} from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {Link} from 'react-router-dom';
import avatar from '../images/AvatarMaker.png'


function Home() {
  const [showTitle, setShowTitle]= useState(true);
    setTimeout(() => {
    setShowTitle(false)
    }, 4000)
  
  return (
    <>
    <motion.div 
     initial={{x:-300}}
     animate={{
      x: 100,
      y:70,
      scale: 1, 
     }}
     transition={{
      type:'spring',
      bounce:0.1,
      duration: 2
    }}
    >
    <AnimatePresence>
      {showTitle && ( 
        <motion.h1 className='hello'
          exit={{opacity: 0}}
          transition={{duration:3}}
          >Hello</motion.h1>
      )}
    </AnimatePresence>
    </motion.div>
    <div className='container'>
    <motion.p
      className='text'
      initial={{x:-2000}}
      animate={{
        x:-500,
        y:100,
        scale: 1
      }}
      transition={{
        delay: 1,
        type:'spring',
        bounce:0.1,
        duration:2     
      }}
   >
   <AnimatePresence>
      {showTitle && (
        <motion.p className="text"
          exit={{opacity: 0}}
          transition={{duration:5}}
        >My</motion.p>
      )}
   </AnimatePresence>
   </motion.p>
    
   <motion.p
      className='text'
      initial={{x:-2000}}
      animate={{
        x:-490,
        y:100,
        scale: 1
      }}
      transition={{
        delay: 2,
        type:'spring',
        bounce:0.1,
        duration:1    
      }}
   >
   <AnimatePresence>
      {showTitle && (
        <motion.p className="text"
          exit={{opacity: 0}}
          transition={{duration:5}}
        >name</motion.p>
      )}
   </AnimatePresence>
   </motion.p>
    
   <motion.p
      className='text'
      initial={{x:-2000}}
      animate={{
        x:-480,
        y:100,
        scale: 1
      }}
      transition={{
        delay: 3,
        type:'spring',
        bounce:0.1,
        duration:1    
      }}
   >
   <AnimatePresence>
      {showTitle && (
        <motion.p className="text"
          exit={{opacity: 0}}
          transition={{duration:5}}
        >is</motion.p>
      )}
   </AnimatePresence>
   </motion.p>

   <motion.p
      className='text'
      initial={{x:-2000}}
      animate={{
        x:-470,
        y:100,
        scale: 1
      }}
      transition={{
        delay: 4,
        type:'spring',
        bounce:0.1,
        duration:1  
      }}
   >
   <AnimatePresence>
      {showTitle && (
        <motion.p className="text"
          exit={{
            opacity: 0,
          }}
          transition={{duration:5}}
          >Pip</motion.p>
          )}
   </AnimatePresence>
   </motion.p>
   <motion.p
      className='text'
      initial={{x:-2000}}
      animate={{
        x:-460,
        y:100,
        scale: 1
      }}
      transition={{
        delay: 5,
        type:'spring',
        bounce:0.1,
        duration: 1  
      }}
   >
   <AnimatePresence>
      {showTitle && (
        <motion.p className="text"
          exit={{
            opacity:0,
          }}
          transition={{duration:5}}
        >Allen</motion.p>
      )}
   </AnimatePresence>
   </motion.p>
   </div> 

  <div className='link-container'>
   <Link to='/about'>
   <motion.button className='about'
      initial={{x:-3000}}
      animate={{
        x:50,
        y:100,
        scale: 1
      }}
      transition={{
        delay: 10,
        type:'spring',
        bounce:0.3, 
        duration:2    
      }}
   >about</motion.button>
   </Link>

   <Link to='/projects'>
   <motion.button className='projects'
      initial={{x:-3000}}
      animate={{
        x:150,
        y:100,
        scale: 1
      }}
      transition={{
        delay: 8.5,
        type:'spring',
        bounce:0.3,
        duration: 2
      }}
   >Projects</motion.button>
   </Link>

   <Link to='/contact'>
   <motion.button className='tech'
      initial={{x:-3000}}
      animate={{
        x:250,
        y:100,
        scale: 1
      }}
      transition={{
        delay: 9,
        type:'spring',
        bounce:0.3,
        duration:2    
      }}
   >Contact me</motion.button>
   </Link>
   </div>
   </>
  )
};

export default Home