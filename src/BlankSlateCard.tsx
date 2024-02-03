import React from "react";

export default function BlankSlateCard({ blankSlateCard }) {
  return (
    // <>
    //   <div className="front">
    //     <b>{blankSlateCard.front_side_word}</b>
    //   </div>
    //   <div className="back">
    //     <b>{blankSlateCard.back_side_word}</b>
    //   </div>
    // </>
    <>
      <div className="front">{blankSlateCard.front_side_word}</div>
      <div className="back">{blankSlateCard.back_side_word}</div>
    </>
  );
}
