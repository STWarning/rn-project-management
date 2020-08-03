import * as React from 'react';
import Icon from '../config/icon-font';

export default function AppIcons({ name, color = '#FFFFFF', size = 24 }) {
  return <Icon size={size} name={name} color={color} />;
}
