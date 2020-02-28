import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, Tab, TabText} from './styles';

export default function Tabs({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
      }}>
      <TabsContainer>
        <Tab>
          <Icon name="person-add" size={24} color="#fff" />
          <TabText>Indicar amigos</TabText>
        </Tab>
        <Tab>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <TabText>Cobrar</TabText>
        </Tab>
        <Tab>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </Tab>
        <Tab>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </Tab>
        <Tab>
          <Icon name="lock" size={24} color="#fff" />
          <TabText>Bloquear cartão</TabText>
        </Tab>
      </TabsContainer>
    </Container>
  );
}
