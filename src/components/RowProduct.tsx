import {View, Text, ScrollView} from 'react-native';
import React, {ReactNode} from 'react';
import Product from './Product';
import {ProductInterface} from 'interfaces/product';
import {Skeleton} from '@rneui/themed';
import ProductLoading from './ProductLoading';
import {useState} from 'react';
import {useEffect} from 'react';

const RowProduct = ({
  title,
  items,
  loading,
}: {
  title: string;
  items: Array<ProductInterface>;
  loading: boolean;
}) => {
  const [loadingTemp, setLoadingTemp] = useState<boolean>(true);

  const loadingProduct: Array<ReactNode> = [];
  for (let i = 0; i < 4; i++) {
    loadingProduct.push(<ProductLoading key={i} />);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoadingTemp(false);
    }, 3000);
  }, []);

  if (items.length > 0) {
    return (
      <View className="py-3 border-b border-gray-300">
        {loading || loadingTemp ? (
          <View className="mb-3 px-3">
            <Skeleton animation="wave" width={150} height={20} />
          </View>
        ) : (
          <Text className="px-3 font-bold text-lg mb-3 capitalize">
            {title}
          </Text>
        )}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 12}}>
          {loading || loadingTemp
            ? loadingProduct
            : items?.map((item: ProductInterface) => {
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
