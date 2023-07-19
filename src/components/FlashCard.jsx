import React, { useState } from "react";
import CardData from "../data/Data";

const FlashCard = () => {
  const [cardDetails] = useState(CardData);
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const increment = () =>
    index >= CardData.length - 1 ? setIndex(0) : setIndex(index + 1);

  const decrement = () =>
    index <= 0 ? setIndex(CardData.length - 1) : setIndex(index - 1);

  const handleMouseOver = () => setIsHovering(true);

  const handleMouseOut = () => setIsHovering(false);

  return (
    <>
      <h1 className="heading">React Flashcard</h1>
      <div>
        <div
          className="card-container"
          key={cardDetails[index].id}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div>
          {isHovering ? (
            <p className="description">{cardDetails[index].description}</p>
          ) : (
            <>
              <span className="id">{cardDetails[index].id}</span>
              <h2 className="title">{cardDetails[index].heading}</h2>
            </>
          )}
          </div>
        </div>
        <div className="cta-control">
          <button className="btn previous" onClick={() => decrement()}>
            previous
          </button>
          <button className="btn next" onClick={() => increment()}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default FlashCard;
