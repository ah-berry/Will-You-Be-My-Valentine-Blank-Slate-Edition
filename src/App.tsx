import { useState } from "react";
import BlankSlateCard from "./BlankSlateCard";
import Showcase from "./Showcase";
import "./App.css";

// Implementation steps:
// ** Get one blank slate card on screen.
// ** Style it to place it in the center of the screen.
// ** Add a top-right corner button that transitions to the next card.
// ** Once all blank slate cards are cycled through, have the button go to the beginning again.
// Style the page on the final flip (If currentCardIndex is blankSlateCards.length - 1 && isFlipped, add styling to body.).
// ** Have a gif appear on the final flip.
// ** See if you can override the initial body CSS with a new body.
// ** Play a song on the final flip. // 38.4 - 63.61
// ** Style gif on the final flip.
// ** Style the page on the final flip (add a pink gradient, add a moving background, etc).
// ** Increase the size of the words.
// Get song to play on mobile.
// Style the back side of the final card (change text font, add filagry borders, etc).
// ** Make the button pop on hover.
// Test the website on Safari and Chrome.
// Add the words to use.

// Notes:
// Can add overlay gif over a pink gradient background but the all white looks nice too.
<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.1/howler.min.js"></script>;

function App() {
  const [blankSlateCards, setBlankSlateCards] = useState(BLANK_SLATE_CARDS);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  return (
    <div>
      <Showcase
        blankSlateCardIndex={currentCardIndex}
        blankSlateCard={blankSlateCards[currentCardIndex]}
        totalBlankSlateCards={blankSlateCards.length - 1}
        key={currentCardIndex}
      />
      <img
        className="navigation-button"
        src="src/assets/right-arrow.png"
        onClick={() => {
          if (currentCardIndex < blankSlateCards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
          } else {
            setCurrentCardIndex(0);
          }
        }}
      ></img>
    </div>
  );
}

const BLANK_SLATE_CARDS = [
  {
    id: 1,
    front_side_word: "Word 1",
    back_side_word: "Word 2",
  },
  {
    id: 2,
    front_side_word: "Word 3",
    back_side_word: "Word 4",
  },
  {
    id: 3,
    front_side_word: "Word 5",
    back_side_word: "Word 6",
  },
  {
    id: 4,
    front_side_word: "Word 7",
    back_side_word: "Will you be my Valentine?",
  },
];

export default App;
