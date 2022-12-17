import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {ProductInterface} from 'interfaces/product';
import {useNavigation} from '@react-navigation/native';
import {PropsNavigation} from 'interfaces/navigation';

const Product = ({
  title,
  description,
  price,
  rating,
  stock,
  brand,
  thumbnail,
  category,
}: ProductInterface) => {
  const navigation: PropsNavigation = useNavigation();
  const handleViewDetail = () => {
    navigation.navigate('ProductDetail', {
      title,
      description,
      price,
      rating,
      stock,
      brand,
      thumbnail,
      category,
    });
  };
  return (
    <TouchableOpacity onPress={handleViewDetail} className="pb-2">
      <View className="bg-white shadow-sm mr-4 rounded-md w-72">
        <View className="rounded-tl-md rounded-tr-md overflow-hidden">
          <Image source={{uri: thumbnail}} className="w-full h-36" />
        </View>

        <View className="px-3 pt-3 pb-4">
          <Text className="text-lg font-bold mb-1" numberOfLines={1}>
            {title}
          </Text>
          <Text className="text-sm text-gray-500 mb-3" numberOfLines={2}>
            {description}
          </Text>
          <View className="flex-row items-center space-x-2 mb-1">
            <Icon name="dollar" type="font-awesome" size={20} color="#106EEA" />

            <View className="flex-row items-center">
              <Text className="text-black text-md font-bold">{price}</Text>
            </View>
          </View>
          <View className="flex-row items-center space-x-2 mb-1">
            <Icon name="star" type="font-awesome" size={17} color="#106EEA" />

            <View className="flex-row items-center">
              <Text className="text-gray-500 text-xs">{rating}</Text>
              <Icon name="dot-single" type="entypo" size={15} color="#106EEA" />
              <Text className="text-gray-500 text-xs">{brand}</Text>
            </View>
          </View>
          <View className="flex-row items-center space-x-2">
            <Icon name="inbox" type="antdesign" size={17} color="#106EEA" />

            <View className="flex-row items-center">
              <Text className="text-gray-500 text-xs">Stock : </Text>
              <Text className="text-gray-500 text-xs">{stock}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
