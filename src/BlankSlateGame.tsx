import React, { useEffect, useState } from "react";
import BlankSlateCard from "./BlankSlateCard";

export default function BlankSlateGame({
  blankSlateCardIndex,
  blankSlateCard,
  totalBlankSlateCards,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const finalCard = blankSlateCardIndex === totalBlankSlateCards;
  console.log(blankSlateCardIndex, totalBlankSlateCards, finalCard);
  const finalFlip = blankSlateCardIndex === totalBlankSlateCards && isFlipped;

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  async function playAudio(audioElem) {
    await audioElem.play();
  }

  function handleAudioPlayOnCard() {
    if (finalCard) {
      const audioElem = document.getElementById("audio");
      const blankSlateCardEl = document.querySelector(".blank-slate-card");
      blankSlateCardEl?.addEventListener(
        "click",
        () => playAudio(audioElem),
        false,
      );
    }
  }

  function setVisualsForFinalFlip() {
    if (finalFlip) {
      // Change the body background color to red and play a song.
      document.body.style.backgroundImage =
        "url(src/assets/falling_petals.gif)";
    } else {
      document.body.style.background =
        "linear-gradient(179.4deg, rgb(253, 240, 233) 2.2%, rgb(255, 194, 203) 96.2%)";
    }
  }

  useEffect(() => {
    handleAudioPlayOnCard();
  }, [finalCard]);

  useEffect(() => {
    setVisualsForFinalFlip();
  }, [finalFlip]);

  return (
    <div className="game-container">
      <audio
        id="audio"
        loop={true}
        src="src/assets/Mitski - My Love Mine All Mine-Clipped.mp3"
      ></audio>
      {finalFlip ? (
        <>
          <div>
            <img
              src="src/assets/peony_flower.gif"
              alt="final-flip-gif"
              className="peony-flower-gif"
            />
          </div>
        </>
      ) : null}
      <div>
        <div
          className={`blank-slate-card ${isFlipped ? "flipped" : ""} ${finalFlip ? "final-flip" : ""}`}
          onClick={handleFlip}
        >
          <BlankSlateCard
            blankSlateCard={blankSlateCard}
            isFinalFlip={finalFlip}
          />
        </div>
      </div>
    </div>
  );
}
