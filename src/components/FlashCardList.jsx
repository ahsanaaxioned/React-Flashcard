import React from 'react'
const FlashCardList = ({Datas})=> {
    console.log(Datas)
  return (
    <div>
      <span>{Datas.id}</span>
      <h2>{Datas.heading}</h2>
    </div>
  )
}
export default FlashCardList