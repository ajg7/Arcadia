import React, { useState } from "react";
import { Adventures } from "../../components/adventures/index";
import Title from "../../components/title/title";
import { OdysseyHeader } from "./styles";
import CreateButton from "../../components/create-button/CreateButton";

const Odyssey = () => {
  const [odysseyTitle, setOdysseyTitle] = useState<string>("");
  const [isOdysseyNamed, setIsOdysseyNamed] = useState<boolean>(!!odysseyTitle);
  return (
    <>
      <CreateButton isOdysseyNamed={isOdysseyNamed} />
      <OdysseyHeader>
        <Title title={odysseyTitle} />
      </OdysseyHeader>
    </>
  );
};

export default Odyssey;
