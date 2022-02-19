import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  interface Props {
    id: number,
    cor: string
  }

  const cartas: Array<Props> = [
    {
      id: 1,
      cor: 'blue'
    },
    {
      id: 2,
      cor: 'blue'
    },
    {
      id: 3,
      cor: 'blue'
    },
    {
      id: 4,
      cor: 'blue'
    },
    {
      id: 5,
      cor: 'blue'
    },
    {
      id: 6,
      cor: 'blue'
    },
    {
      id: 7,
      cor: 'blue'
    },
    {
      id: 8,
      cor: 'blue'
    },
    {
      id: 9,
      cor: 'blue'
    },
  ];

  const [bg, setBg] = useState(cartas);

  const alteraCor = (data: {id: number, cor: string}, event: any) => {
    console.log("Clicou no " + data.id, event.target);
    //event.target.style.backgroundColor =  event.target.style.backgroundColor == 'blue' ? 'red' : 'blue';
    bg[data.id].cor = 'red';
    console.log(bg);
  }

  useEffect(() => {
    setBg(bg);
  })
  return (
    <div className="App">
      <h1>Jogo da memória</h1>
      <div className="bloco">
        {
          bg.map(data => <div className="card" style={{backgroundColor: data.cor}} onClick={(event) => alteraCor(data, event)} id={"carta-"+ data.id.toString()}></div>)
        }
      </div>
    </div>
  );
}

export default App;
