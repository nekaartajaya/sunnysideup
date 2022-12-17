import {View} from 'react-native';
import React from 'react';
import {Skeleton} from '@rneui/base';

const ProductLoading = () => {
  return (
    <View className="w-72 bg-white mr-4">
      <View className="mb-2">
        <Skeleton animation="wave" width={288} height={144} />
      </View>
      <View className="p-2">
        <View className="mb-2">
          <Skeleton animation="wave" width={140} height={15} />
        </View>
        <View className="mb-2">
          <Skeleton animation="wave" width={270} height={25} />
        </View>
        <View className="mb-2">
          <Skeleton animation="wave" width={120} height={30} />
        </View>
      </View>
    </View>
  );
};

export default ProductLoading;
