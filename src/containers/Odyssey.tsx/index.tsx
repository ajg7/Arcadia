import React, { useState } from "react";

const Odyssey = (): JSX.Element => {
  /*
    Endgoal: We need to create a system where you can create an Odyssey -> Adventures -> Battle
    1. Add an Odyssey
  */

  const [odysseyTitle, setOdysseyTitle] = useState<string>("");
  const [isOdysseyTextBoxActive, setIsOdysseyTextBoxActive] =
    useState<boolean>(false);
  const [isButtonActive, setIsButtonActive] = useState<boolean>(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOdysseyTextBoxActive(false);
    setIsButtonActive(false);
    setIsFormSubmitted(true);
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
          {"Add an Odyssey"}
        </button>
      )}
      {isFormSubmitted && <h1>{odysseyTitle}</h1>}
    </div>
  );
};

export default Odyssey;
