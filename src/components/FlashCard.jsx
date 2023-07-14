import React, { useState } from "react";
import CardData from "../data/Data";

const FlashCard = () => {
  const [cardDetails] = useState(CardData);
  const [index, setIndex] = useState(0);

  const increment = () =>
    index >= CardData.length - 1 ? setIndex(0) : setIndex(index + 1);

  const decrement = () =>
    index <= 0 ? setIndex(CardData.length - 1) : setIndex(index - 1);

  return (
    <>
      <h1 className="heading">React Flashcard</h1>
      <div className="card-container">
        <span>{cardDetails[index].id}</span>
        <h2>{cardDetails[index].heading}</h2>
      </div>
      <button className="btn" onClick={() => decrement()}>
        previous
      </button>
      <button className="btn" onClick={() => increment()}>
        Next
      </button>
    </>
  );
};

export default FlashCard;
