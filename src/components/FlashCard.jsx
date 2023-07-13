import React, { useEffect, useState } from "react";
import CardData from "../data/Data";

const FlashCard = () => {
  const [cardDetails] = useState(CardData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(CardData.length - 1);
    }
    if (index > CardData.length - 1) {
      setIndex(0);
    }
  }, [index]);

  return (
    <>
      <h1 className="heading">React Flashcard</h1>
      <ul className="card-container">
        {cardDetails.map((item, cardIndex) => {
          const { id, heading } = item;
          let position = false ;
          if (cardIndex === index) {
            // console.log("cardIndex:", cardIndex);
            // console.log("index:", index);
            position = true;
          }
          return (
            <li key={id} className={`card-detail  ${position ? 'active-slide' : ''}`}>
              <span>{id}</span>
              <h2>{heading}</h2>
            </li>
          );
        })}
      </ul>
      <button className="btn" onClick={() => setIndex(index -1)} >
        previous
      </button>
      <button className="btn" onClick={() => setIndex(index + 1)} >
      Next
      </button>
      </>
  );
};

export default FlashCard;
