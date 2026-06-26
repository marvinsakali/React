import { useState } from "react";
import "./App.css";
import { languages } from "./languages";
import getRandomWord from "./utils";
import clsx from "clsx";

function App() {
  // state variables
  const [currentWord, setCurrentWord] = useState(()=> getRandomWord());
  const [guessedLetter, setGuessedLetter] = useState([]);

  // derived variable
  const wrongWordCount = guessedLetter.filter(
    (item) => !currentWord.includes(item),
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((item) => guessedLetter.includes(item));

  const isGameLost = wrongWordCount >= languages.length - 1;

  const isGameOver = isGameWon || isGameLost;

  // static variable
  const keyboard = "abcdefghijklmnopqrstuvwxyz";

  const wordElement = currentWord.split("").map((item, index) => (
    <span className="letter" key={index}>
      {guessedLetter.includes(item) ? item.toUpperCase() : ""}
    </span>
  ));

  const languagesElement = languages.map((item, index) => {
    const style = { backgroundColor: item.backgroundColor, color: item.color };
    const isLost = index < wrongWordCount;

    return (
      <span
        className={`language ${isLost ? "lost" : ""}`}
        key={index}
        style={style}
      >
        {item.name}
      </span>
    );
  });

  const addGuessedLetter = (letter) => {
    setGuessedLetter((prev) =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
  };

  const keyboardElement = keyboard.split("").map((item) => {
    const isGuessed = guessedLetter.includes(item);
    const isCorrect = isGuessed && currentWord.includes(item);
    const isWrong = isGuessed && !currentWord.includes(item);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        onClick={() => addGuessedLetter(item)}
        key={item}
        disabled={isGameOver}
      >
        {item.toUpperCase()}
      </button>
    );
  });
  const gameStyle = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
  });

  const renderNewGame = () =>{
    setCurrentWord(getRandomWord())
    setGuessedLetter([])
  }

  return (
    <main className="game-container">
      <header className="header">
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world alive!
        </p>
      </header>

      <section className={gameStyle}>
        {isGameOver ? (
          isGameWon ? (
            <>
              <h2>You Won!</h2>
              <p>Well done! 🎉</p>
            </>
          ) : (
            <>
              <h2>You Lost!</h2>
              <p>Better start learning assembly!</p>
            </>
          )
        ) : null}
      </section>

      <section className="languages">{languagesElement}</section>

      <section className="word">{wordElement}</section>

      <section className="keyboard">{keyboardElement}</section>

      {isGameOver && <button onClick={renderNewGame} className="new-game-btn">New Game</button>}
    </main>
  );
}

export default App;
