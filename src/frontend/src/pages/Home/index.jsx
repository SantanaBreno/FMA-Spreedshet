import React from 'react';
import {
  HomeWrapper,
  ContentWrapper,
  Title,
  OptionsWrapper,
  OptionCard,
  OptionIcon,
  OptionLabel,
} from './styles';

import { Icon } from '@iconify/react'; // Agora usamos só Iconify para todos
import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      
      <HomeWrapper>
        <ContentWrapper>
          <Title>Selecione o serviço desejado:</Title>
          <OptionsWrapper>

            {/* Card 1: Gerenciamento de Projetos */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <OptionCard>
                <OptionIcon>
                  <Icon icon="material-symbols:bookmark-manager" style={{ fontSize: 100, color: '#262626' }} />
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
                  <Icon icon="bxs:spreadsheet" style={{ fontSize: 100, color: '#262626' }} />
                </OptionIcon>
              </OptionCard>
              <OptionLabel>
                Planilha de<br />Decoração
              </OptionLabel>
            </div>

          </OptionsWrapper>
        </ContentWrapper>
      </HomeWrapper>
    </>
  );
};

export default Home;
