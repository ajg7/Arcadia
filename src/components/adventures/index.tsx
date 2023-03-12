import React, { FC } from "react";

interface AdventureProps {
  adventure: string;
}

const Adventure: FC<AdventureProps> = ({ adventure }) => {
  return (
    <div>
      <h3>{adventure}</h3>
    </div>
  );
};

export default Adventure;
