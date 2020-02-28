import {StyleSheet, Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  align-self: center;
  background-color: #fff;
  padding: 10px;
  overflow: hidden;
`;

export const Nav = styled.View`
  margin-top: 30px;
  align-self: stretch;
  border-top-color: rgba(255, 255, 255, 0.8);
  border-top-width: ${StyleSheet.hairlineWidth}px; /* Menor que um pixel */
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-bottom-width: ${StyleSheet.hairlineWidth}px; /* Menor que um pixel */
`;

export const NavText = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
  border-color: rgba(255, 255, 255, 0.8);
  border-width: 1px; /* Menor que um pixel */
  border-radius: 4px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 700;
`;
