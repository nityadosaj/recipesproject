import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles';
  
//Scroll button to jump to the top of the page

const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none', fontSize:"50px", justifySelf:"center" }} />
    </Button>
  );
}
  
export default ScrollButton;