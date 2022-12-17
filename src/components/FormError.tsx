import {Text} from 'react-native';
import React from 'react';

const FormError = ({text}: {text: string}) => {
  return <Text className="text-[10px] text-red-500">{text}</Text>;
};

export default FormError;
