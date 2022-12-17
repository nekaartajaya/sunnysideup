import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Product from './Product';
import {ProductInterface} from '../interfaces/product';

const RowProduct = ({
  title,
  items,
}: {
  title: string;
  items: Array<ProductInterface>;
}) => {
  if (items.length > 0) {
    return (
      <View className="py-3 border-b border-gray-300">
        <Text className="px-3 font-bold text-lg mb-3 capitalize">{title}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 12}}>
          {items?.map((item: ProductInterface) => {
            return (
              <Product
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                rating={item.rating}
                stock={item.stock}
                brand={item.brand}
                category={item.category}
                thumbnail={item.thumbnail}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
  return null;
};

export default RowProduct;
