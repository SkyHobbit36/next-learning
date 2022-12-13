import React from 'react';
import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary"  arrow="down">Кнопка</Button>
      <Button appearance="ghost" arrow="right">Кнопка</Button>
    </div>
  );
}
