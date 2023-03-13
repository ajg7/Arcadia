import React, { FC, useState } from "react";
import { CreateButtonWrapper } from "./styles";

interface CreateButtonProps {
  isOdysseyNamed?: boolean;
}

enum Options {
  Odyssey = "odyssey",
  Adventure = "adventure",
  Battle = "battle",
}

const CreateButton: FC<CreateButtonProps> = ({ isOdysseyNamed }) => {
  const [isSelectionActive, setIsSelectionActive] = useState<boolean>(false);

  return (
    <CreateButtonWrapper>
      <button onClick={() => setIsSelectionActive(!isSelectionActive)}>
        + Create
      </button>
      {isSelectionActive && (
        <ul>
          {!isOdysseyNamed && (
            <li value={Options.Odyssey}>Odyssey</li>
          )}
          <li value={Options.Adventure}>Adventure</li>
          <li value={Options.Battle}>Battle</li>
        </ul>
      )}
    </CreateButtonWrapper>
  );
};

export default CreateButton;
