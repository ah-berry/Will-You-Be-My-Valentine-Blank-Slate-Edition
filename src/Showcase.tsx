import React, { useEffect, useState } from "react";
import BlankSlateCard from "./BlankSlateCard";

export default function Showcase({
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
      document.body.style.background =
        "linear-gradient(179.4deg, rgb(253, 240, 233) 2.2%, rgb(255, 194, 203) 96.2%)";
      document.body.style.backgroundImage =
        "url(src/assets/falling_petals.gif)";
    } else {
      document.body.style.background =
        "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)";
    }
  }

  useEffect(() => {
    setVisualsForFinalFlip();
  }, [finalFlip]);

  return (
    <div className="showcase-container">
      {finalFlip ? (
        <>
          <div>
            <img
              src="src/assets/peony_flower.gif"
              alt="final-flip-gif"
              className="peony-flower-gif"
            />
          </div>
          <div>
            <embed
              src="src/assets/Mitski - My Love Mine All Mine-Clipped.mp3"
              loop="true"
              autostart="true"
              width="2"
              height="0"
            ></embed>
          </div>
        </>
      ) : null}
      <div>
        <div
          className={`blank-slate-card ${isFlipped ? "flipped" : ""} ${blankSlateCardIndex === totalBlankSlateCards && isFlipped ? "final-flip" : ""}`}
          onClick={handleFlip}
        >
          {/* This method could style the card. */}
          {/* <div className="blank-slate-card-placement final-flip-gif-container">
            <img src="src/assets/peony_flower.gif" alt="final-flip-gif" />
          </div> */}
          <BlankSlateCard blankSlateCard={blankSlateCard} />
        </div>
      </div>
    </div>
  );
}
