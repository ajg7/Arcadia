import React, { useState } from "react";

const Odyssey = (): JSX.Element => {
  /*
    Endgoal: We need to create a system where you can create an Odyssey -> Adventures -> Battle
    1. Add adventures
  */

  const [odysseyTitle, setOdysseyTitle] = useState<string>("");
  const [isOdysseyTextBoxActive, setIsOdysseyTextBoxActive] =
    useState<boolean>(false);
  const [isButtonActive, setIsButtonActive] = useState<boolean>(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isAdventureCreateActive, setIsAdventureCreateActive] =
    useState<boolean>(false);
  const [adventures, setAdventures] = useState<Array<string>>([]);
  const [adventureTitle, setAdventureTitle] = useState<string>("");
  const [isAdventureTextBoxActive, setIsAdventureTextBoxActive] =
    useState<boolean>(false);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOdysseyTextBoxActive(false);
    setIsButtonActive(false);
    setIsFormSubmitted(true);
    setIsAdventureCreateActive(true);
  };

  const submitAdventureHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAdventureCreateActive(true);
    setIsAdventureTextBoxActive(false);
    setAdventures((prevState) => [...prevState, adventureTitle]);
  };

  return (
    <div>
      {isOdysseyTextBoxActive && (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={({ target: { value } }) => setOdysseyTitle(value)}
          />
        </form>
      )}
      {isButtonActive && (
        <button
          onClick={() => setIsOdysseyTextBoxActive(!isOdysseyTextBoxActive)}
        >
          {"Add an Odyssey!"}
        </button>
      )}
      {isFormSubmitted && <h1>{odysseyTitle}</h1>}
      {isAdventureTextBoxActive && (
        <form onSubmit={submitAdventureHandler}>
          <input
            type="text"
            onChange={({ target: { value } }) => setAdventureTitle(value)}
          />
        </form>
      )}
      {isAdventureCreateActive && (
        <button
          onClick={() => setIsAdventureTextBoxActive(!isAdventureTextBoxActive)}
        >
          {"Add an Adventure!"}
        </button>
      )}
      {adventures.map((adventure) => {
        return (
          <div>
            <h3>{adventure}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Odyssey;
