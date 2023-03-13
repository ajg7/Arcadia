import React, { FC, useState } from "react";
import { CreateButtonWrapper } from "./styles";

interface CreateButtonProps {
  isOdysseyNamed?: boolean;
}

enum CreateOptions {
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
            <li value={CreateOptions.Odyssey}>Odyssey</li>
          )}
          <li value={CreateOptions.Adventure}>Adventure</li>
          <li value={CreateOptions.Battle}>Battle</li>
        </ul>
      )}
    </CreateButtonWrapper>
  );
};

export default CreateButton;
