import React, { useEffect, useState } from "react";

export default function BlankSlateCard({
  blankSlateCardIndex,
  blankSlateCard,
  totalBlankSlateCards,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const finalFlip = blankSlateCardIndex === totalBlankSlateCards && isFlipped;

  function handleFlip() {
    setIsFlipped(!isFlipped);
    console.log(isFlipped);
    console.log(blankSlateCardIndex, totalBlankSlateCards);
  }

  function setVisualsForFinalFlip() {
    if (finalFlip) {
      // Change the body background color to red and play a song.
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }

  useEffect(() => {
    setVisualsForFinalFlip();
  }, [finalFlip]);

  return (
    <>
      {finalFlip ? (
        <div className="final-flip-gif">
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="final-flip-gif"
          />
          <embed
            src="src/assets/Mitski - My Love Mine All Mine-Clipped.mp3"
            loop="true"
            autostart="true"
            width="2"
            height="0"
          ></embed>
        </div>
      ) : null}
      <div
        className={`blank-slate-card ${isFlipped ? "flipped" : ""} ${blankSlateCardIndex === totalBlankSlateCards && isFlipped ? "final-flip" : ""}`}
        onClick={handleFlip}
      >
        <div className="front">
          <b>{blankSlateCard.front_side_word}</b>
        </div>
        <div className="back">
          <b>{blankSlateCard.back_side_word}</b>
        </div>
      </div>
    </>
  );
}
