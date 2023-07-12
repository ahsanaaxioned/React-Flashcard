import React, { useEffect, useState } from "react";
import CardData from "../data/Data";

const FlashCard = () => {
  const [cardDetails] = useState(CardData);
  const [index, setIndex] = useState(0);
  // console.log(cardDetails);
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
    // return clearInterval(slideCard);
  }, [index]);
  return (
    <div className="main-container">
    <h1 className='heading'>React Flashcard</h1>
    <div className = 'card-container'>
     {cardDetails.map((item,cardIndex)=>{
      // console.log(item)
       const {id,heading} = item;
       let position = 'next-slide';
       if(cardIndex === index){
        console.log('cardIndex:',cardIndex);
        console.log('index:',index);
        position = 'activeSlide'
       }
      //  console.log(id,heading);
       return(
        <div key = {id} className={`card-detail  ${position}`}>
       <span>{id}</span>
       <h2>{heading}</h2>
       </div>
       )
     })}
    </div>
    </div>
  )
};

export default FlashCard;
