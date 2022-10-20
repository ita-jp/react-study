import React, { FC } from 'react';
import CharacterList from './components/CharacterList';
import './App.css';
import { Heading } from '@chakra-ui/react';

const App: FC = () => {
  return (
  <div className='container'>
    <Heading size="lg" as="h1" my={12}>
      登場人物一覧
    </Heading>
    <CharacterList></CharacterList>
  </div>
  )
}

export default App;
