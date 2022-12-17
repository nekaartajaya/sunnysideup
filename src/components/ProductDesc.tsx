import {View, Text} from 'react-native';
import React from 'react';

const ProductDesc = ({title, text}: {title: string; text: string | number}) => {
  return (
    <View className="w-1/2">
      <Text className="font-bold text-[17px] mb-1">{title}</Text>
      <Text className="capitalize">{text}</Text>
    </View>
  );
};

export default ProductDesc;
