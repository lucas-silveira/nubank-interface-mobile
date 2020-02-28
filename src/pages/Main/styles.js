import styled from 'styled-components/native';
import {Platform, Animated} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: #8b10ae;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
`;

export const Content = styled.View`
  flex: 1;
  position: relative;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: #fff;
  margin: 0 20px;
  border-radius: 4px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  color: #999;
  font-size: 13px;
`;

export const Description = styled.Text`
  color: #333;
  font-size: 32px;
  margin-top: 3px;
`;

export const CardFooter = styled.View`
  background-color: #f5f5f5;
  padding: 30px;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  color: #333;
  font-size: 12px;
`;
