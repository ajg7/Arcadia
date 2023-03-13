import React from "react";
import { Adventures } from "../../components/adventures/index";
import Title from "../../components/title/title";
import { OdysseyHeader } from "./styles";
import CreateButton from "../../components/create-button/CreateButton";

const Odyssey = () => {
  return (
    <>
      <div>
        <CreateButton />
      </div>
      <OdysseyHeader>
        <Title title={"Hegelian Dialectics"} />
      </OdysseyHeader>
    </>
  );
};

export default Odyssey;
