import React, { FC } from "react";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
