import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Product from './Product';

const RowProduct = () => {
  return (
    <View className="py-3 border-b border-gray-300">
      <Text className="px-3 font-bold text-lg mb-3">Smartphones</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 12}}>
        <Product
          title="iPhone 9"
          description="An apple mobile which is nothing like apple"
          price={549}
          rating={4.69}
          stock={94}
          brand="Apple"
          category="smartphones"
          thumbnail="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        />
      </ScrollView>
    </View>
  );
};

export default RowProduct;
