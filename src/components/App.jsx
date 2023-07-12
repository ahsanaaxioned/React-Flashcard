import FlashCard from './FlashCard';
import "../assets/App.css";
import CardData from "../data/Data"
import { useState } from 'react';

function App() {
  const [cardDetail, setCardData] = useState(CardData);
  return (
    <>
    <h1 className='heading'>React Flashcard</h1>
    <FlashCard cardDetail = {cardDetail}  />
    </>
  );
}

export default App;
