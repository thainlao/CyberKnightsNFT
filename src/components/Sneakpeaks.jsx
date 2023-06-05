import React, { useState, useEffect } from "react";
import robot1 from '../assets/robot1.png';
import robot2 from '../assets/robot2.png';
import robot3 from '../assets/robot3.png';
import robot4 from '../assets/robot4.png';
import robot5 from '../assets/robot5.png';
import robot6 from '../assets/robot6.png';
import robot7 from '../assets/robot7.png';
import robot8 from '../assets/robot8.png';

const Sneakpeaks = () => {
    const [cards] = useState([
        { id: 1, title: "Card 1", image: robot1 },
        { id: 2, title: "Card 2", image: robot2 },
        { id: 3, title: "Card 3", image: robot3 },
        { id: 4, title: "Card 4", image: robot4 },
        { id: 5, title: "Card 5", image: robot5 },
        { id: 6, title: "Card 6", image: robot6 },
        { id: 7, title: "Card 7", image: robot7 },
        { id: 8, title: "Card 8", image: robot8 },
      ]);

    const [startIndex, setStartIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
          setStartIndex(startIndex - 1);
        } else {
          setStartIndex(startIndex + 1);
        }
      };

    return (
        <div className="sneakpeaksbody py-10">
          <p className="text-white justify-center items-center sm:text-[65px] text-4xl flex"
          style={{ fontFamily: 'My Custom Font1' }}>
              face cyberknights
              </p>
              <p className="text-white justify-center flex items-center sm:text-[65px] text-4xl py-10"
          style={{ fontFamily: 'My Custom Font1' }}>
              Only 550 available
              </p>
            <div className="justify-center items-center py-10">
      <div className="relative w-full text-white text-5xl">
        {startIndex > 0 && (
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            onClick={() => handleClick("left")}
          >
            {"<"}
          </button>
        )}
        <div className="flex justify-center sm:gap-20 gap-5 overflow-x-hidden">
          {cards.slice(startIndex, startIndex + 4).map((card) => (
            <div key={card.id} className="w-64 cardsbg cardsbg1 p-2 bg-[black] m-4">
              <div className="w-32 h-64 sm:w-full sm:h-80 relative">
  <img className="absolute top-0 left-0 w-full h-full object-cover" src={card.image} alt={card.title} />
</div>
        </div>
          ))}
        </div>
        {startIndex < cards.length - 4 && (
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={() => handleClick("right")}
          >
            {">"}
          </button>
        )}
      </div>
    </div>
</div>
    )
}

export default Sneakpeaks;