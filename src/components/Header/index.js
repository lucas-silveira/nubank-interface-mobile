import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Logotipo from '~/assets/img/Nubank_Logo.png';

import {Container, Top, Logo, Title} from './styles';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={Logotipo} />
        <Title>Lucas</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}
