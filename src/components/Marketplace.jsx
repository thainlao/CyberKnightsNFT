import React, { useState, useEffect } from "react";
import gif from '../assets/My_Coin (2).gif';

const Marketplace = () => {

    const [text, setText] = useState('The Marketplace is coming');
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text => text.endsWith('...') ? 'The Marketplace is coming' : `${text}.`);
    }, 500);
    return () => clearInterval(interval);
  }, []);

    return (
        <div className="marketplacebody flex justify-center items-center flex-col">
                <p className="text-white justify-center items-center sm:text-[60px] text-5xl py-44 flex"
          style={{ fontFamily: 'My Custom Font1' }}>
              {text}
              </p>
        </div>
    )
}

export default Marketplace;
