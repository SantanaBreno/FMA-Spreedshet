import React from 'react';
import {
  HomeWrapper,
  Title,
  OptionsWrapper,
  OptionCard,
  OptionIcon,
  OptionLabel,
} from './styles';

import { FaFolderOpen } from 'react-icons/fa';
import { FaTableList } from 'react-icons/fa6'; // substitua se usar outro ícone

const Home = () => {
  return (
    <HomeWrapper>
      <Title>Selecione o serviço desejado:</Title>
      <OptionsWrapper>
        <OptionCard>
          <OptionIcon>
            <FaFolderOpen />
          </OptionIcon>
          <OptionLabel>
            Gerenciamento<br />de Projetos
          </OptionLabel>
        </OptionCard>
        <OptionCard>
          <OptionIcon>
            <FaTableList />
          </OptionIcon>
          <OptionLabel>
            Planilha de<br />Decoração
          </OptionLabel>
        </OptionCard>
      </OptionsWrapper>
    </HomeWrapper>
  );
};

export default Home;
