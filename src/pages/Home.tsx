import {SafeAreaView} from 'react-native';
import React from 'react';
import Header from 'components/Header';
import RowProduct from 'components/RowProduct';
import {ScrollView} from 'react-native-gesture-handler';
import {useQuery} from 'react-query';
import {getAllProductAPI, getAllCategoryAPI} from 'api/productAPI';
import {ProductInterface} from 'interfaces/product';

const Home = () => {
  const {data: products} = useQuery(['/products'], () => getAllProductAPI());

  const {data: categories} = useQuery(['/category'], () => getAllCategoryAPI());

  const filterProductByCategory = (category: string) => {
    return products?.data?.filter(
      (product: ProductInterface) => product.category === category,
    );
  };

  return (
    <>
      <Header />
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}>
          {categories?.data?.map((cat: string, index: number) => {
            return (
              <RowProduct
                key={index}
                title={cat}
                items={filterProductByCategory(cat)}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
