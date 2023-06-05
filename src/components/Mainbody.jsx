import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import twitter from '../assets/twitter-64.png';
import etherscan from '../assets/etherscan-logo-circle-light.png';

const Mainbody = () => {  
    const [text, setText] = useState("CHCHC CHCHCHC");

    useEffect(() => {
      const patterns = ["C", "V", "U", "Z", "G"];
      const letters = text.split("");
      let currentIndex = 0;
  
      const interval = setInterval(() => {
        setText((prevText) => {
          const newText = letters.map((letter, index) => {
            const patternIndex = (currentIndex + index) % patterns.length;
            return patterns[patternIndex];
          });
          currentIndex++;
          return newText.join("");
        });
      }, 120);
  
      setTimeout(() => {
        setText("Cyber Knights");
        clearInterval(interval);
      }, 1800);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <div className="mainbody">
            <div className="header-container">
                <div className=" flex justify-center items-center"> 
                    <div className="flex sm:gap-8 gap-2 items-center text-white
                    sm:text-[22px] text-sm font-semibold">
                        <li><button onClick={() => scroll.scrollToTop()} className="hover:text-[#f1aae5] cursor-pointer neon-text expand">Menu</button> </li>
                        <Link to="about" smooth={true} duration={500} className="hover:text-[#f1aae5] cursor-pointer neon-text expand">About</Link>
                        <Link to="gallery" smooth={true} duration={500} className="hover:text-[#f1aae5] cursor-pointer neon-text expand">Gallery</Link>
                        <Link to="marketplace" smooth={true} duration={500} className="hover:text-[#f1aae5] cursor-pointer neon-text expand">Marketplace</Link>
                        <Link to="mint" smooth={true} duration={500} className="hover:text-[#f1aae5] cursor-pointer neon-text expand">Mint</Link>
        <a href="https://twitter.com/CyberKnightss">
                    <img className ="w-8 h-8 expand" src={twitter} alt="Twitter"></img>
                </a>
                <a href="">
                    <img className ="w-8 h-8 expand" src={etherscan} alt="Etherscan"></img>
                </a>
                    </div>
                </div>
            </div>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="flex justify-center items-center flex-col gap-5">
                    <span style={{ fontFamily: 'My Custom Font1' }} className="text-5xl sm:text-[75px] text-[#f5d3eb] glow">
                        First AI Ordinals | NFT
                        </span>
                        <span style={{ fontFamily: 'My Custom Font1' }} className="sm:text-[75px] text-5xl text-[#f5d3eb] glow">
                        {text} 
                        </span>
                    </div>
                </div>
            </div>  
    )
}

export default Mainbody