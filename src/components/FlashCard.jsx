import React, { useEffect, useState } from "react";
import CardData from "../data/Data";

const FlashCard = () => {
  const [cardDetails] = useState(CardData);
  const [index, setIndex] = useState(0);
  console.log(cardDetails);
  useEffect(() => {
    if (index < 0) {
      setIndex(CardData.length - 1);
    }
    if (index > CardData.length - 1) {
      setIndex(0);
    }
  }, [index, cardDetails]);
  useEffect(() => {
    let slideCard = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    console.log(index);
    return clearInterval(slideCard);
  }, [index]);
  return (
    <>
    <h1 className='heading'>React Flashcard</h1>
    <div>
     {cardDetails.map((item,index)=>{
      console.log(item)
       const {id,heading} = item;
       console.log(id,heading);
       return(
        <div key = {id}>
       <span>{id}</span>
       <h2>{heading}</h2>
       </div>
       )
     })}
    </div>
    </>
  )
};

export default FlashCard;
