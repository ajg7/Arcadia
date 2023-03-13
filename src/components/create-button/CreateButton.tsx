import React, { FC, useState } from "react";
import { CreateButtonWrapper } from "./styles";

interface CreateButtonProps {
  isOdysseySelected?: boolean;
}

const CreateButton: FC<CreateButtonProps> = ({ isOdysseySelected }) => {
  const [isSelectionActive, setIsSelectionActive] = useState<boolean>(false);

  return (
    <CreateButtonWrapper>
      <button onClick={() => setIsSelectionActive(!isSelectionActive)}>
        + Create
      </button>
      {isSelectionActive && (
        <div>
          {!isOdysseySelected && <p>Odyssey</p>}
          <p>Adventure</p>
          <p>Battle</p>
        </div>
      )}
    </CreateButtonWrapper>
  );
};

export default CreateButton;
