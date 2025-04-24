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
import { FaTableList } from 'react-icons/fa6'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <Title>Selecione o serviço desejado:</Title>
      <OptionsWrapper>
        {/* Card 1: Gerenciamento de Projetos */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <OptionCard>
            <OptionIcon>
              <FaFolderOpen size={72} />
            </OptionIcon>
          </OptionCard>
          <OptionLabel>
            Gerenciamento<br />de Projetos
          </OptionLabel>
        </div>

        {/* Card 2: Planilha de Decoração */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/homespreadsheets')}
        >
          <OptionCard>
            <OptionIcon>
              <FaTableList size={72} />
            </OptionIcon>
          </OptionCard>
          <OptionLabel>
            Planilha de<br />Decoração
          </OptionLabel>
        </div>
      </OptionsWrapper>
    </HomeWrapper>
  );
};

export default Home;
