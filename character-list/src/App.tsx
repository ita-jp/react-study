import React, { FC } from 'react';
import CharacterList from './components/CharacterList';
import type { Character } from './components/CharacterList';
import './App.css';
import { Heading } from '@chakra-ui/react';

const App: FC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: "磯野カツオ",
      grade: 5,
      height: 160
    },
    {
      id: 2,
      name: "磯野ワカメ",
      grade: 4,
    },
    {
      id: 3,
      name: "花沢さん",
      grade: 5
    }
  ];

  return (
  <div className='container'>
    <Heading size="lg" as="h1" my={12}>
      登場人物一覧
    </Heading>
    <CharacterList school='かもめ第3中学校' characters={characters}></CharacterList>
  </div>
  )
}

export default App;
