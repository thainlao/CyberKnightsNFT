import React from "react";
import { useEffect, useRef } from 'react';

const About = () => {
  const canvasRef = useRef(null);
  const fontSize = 16;
  const columns = window.innerWidth / fontSize;

  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const alphabetString = latin + nums;

  let rainDrops = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#e60073';
      context.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabetString.charAt(Math.floor(Math.random() * alphabetString.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const intervalId = setInterval(draw, 80);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

    return (
    <div className="relative z-0">
        <div className="bg-cover bg-no-repeat bg-center">
            <canvas ref={canvasRef} id="Matrix" className="absolute inset-0"></canvas>
                <div className="aboutcomponent">
                    <div className="aboutcontainer relative">
                        <div className="min-h-screen flex items-center justify-center flex-col">
                            <h1 className="text-[50px] font-bold text-[white] relative z-10" style={{ fontFamily: 'My Custom Font1' }}>About</h1>
                                <h2 className="text-white relative font-mono" style={{ lineHeight: '1.5', maxWidth: "350px" }} >
                                We are glad to present a project that has been in preparation for over six months. The first time
                                in the history of the NFT. A brand new multi-chain project. ETH - Ordinals Project.
                                Cybernights is the first project capable of converting from ETH to BTS. We also include
                                a marketplace with products from us and our partners, which can be either on BTС or ETX.
                                </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;