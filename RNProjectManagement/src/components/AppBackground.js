import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function AppBackground(props) {
  return (
    <LinearGradient colors={['#9BCEFE', '#739FF9', '#5C83F3']} {...props}>
      {props.children}
    </LinearGradient>
  );
}
