import React from "react";
import { Adventures } from "../../components/adventures/index";
import Title from "../../components/title/title";
import { OdysseyHeader } from "./styles";

const Odyssey = () => {
  return (
    <OdysseyHeader>
      <Title title={"Hegelian Dialectics"} />
    </OdysseyHeader>
  );
};

export default Odyssey;
