import React from "react";

export default function BlankSlateCard({ blankSlateCard, isFinalFlip }) {
  return (
    <>
      <div className="front">{blankSlateCard.front_side_word}</div>
      {isFinalFlip ? (
        <>
          <div className="back final-flip" id="final-side">
            {blankSlateCard.back_side_word}
          </div>
        </>
      ) : (
        <div className="back">{blankSlateCard.back_side_word}</div>
      )}
    </>
  );
}
