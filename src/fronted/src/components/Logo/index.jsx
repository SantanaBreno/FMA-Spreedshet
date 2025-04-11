import React from 'react';
import { LogoArea, BarsGroup, BarTall, BarShort, TextGroup } from './styles';

const Logo = () => {
  return (
    <LogoArea>
      <BarsGroup>
        <BarTall /><BarTall /><BarShort /><BarTall />
        <BarTall /><BarShort /><BarTall /><BarTall />
      </BarsGroup>
      <TextGroup>
        <span>Fernanda</span>
        <span>Marques</span>
        <span>Arquitetura</span>
      </TextGroup>
    </LogoArea>
  );
};

export default Logo;
