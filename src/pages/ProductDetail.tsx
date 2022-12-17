import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ProductInterface} from 'interfaces/product';
import ProductDesc from 'components/ProductDesc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from '@rneui/themed';
import {PropsNavigation} from 'interfaces/navigation';

const ProductDetail = ({navigation}: PropsNavigation) => {
  const {
    params: {
      title,
      description,
      price,
      rating,
      stock,
      brand,
      thumbnail,
      category,
    },
  }: ProductInterface = useRoute();

  return (
    <SafeAreaView className="flex-1">
      <Image source={{uri: thumbnail}} className="w-full h-52" />

      <View className="p-4 flex-1">
        <View className="mb-6">
          <Text className="font-bold text-xl mb-2">{title}</Text>
          <Text>{description}</Text>
        </View>
        <View className="flex-row space-x-2 mb-4">
          <ProductDesc title="Price" text={`${price}`} />
          <ProductDesc title="Rating" text={rating} />
        </View>
        <View className="flex-row space-x-2 mb-4">
          <ProductDesc title="Category" text={category} />
          <ProductDesc title="Brand" text={brand} />
        </View>
        <View className="flex-row space-x-2 mb-4">
          <ProductDesc title="Stock" text={stock} />
        </View>
      </View>

      <View className="absolute bottom-10 w-full">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className=" bg-[#106EEA] flex-row items-center justify-center space-x-2 py-2 px-4 rounded-md w-[120px] mx-auto">
          <Icon name="arrow-back" type="ionicon" size={20} color="#FFF" />
          <Text className="text-lg text-white font-bold">Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
