import React, { useState } from "react";
import CardData from "../data/Data";
import FlashCardList from "./FlashCardList";

const FlashCard = ({ cardDetail }) => {
  return (
    <div>
      {cardDetail.map((Datas) => {
        return <FlashCardList Datas={Datas} key={Datas.id} />;
      })}
    </div>
  );
};

export default FlashCard;
