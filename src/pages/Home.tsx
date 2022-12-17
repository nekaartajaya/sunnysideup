import {SafeAreaView} from 'react-native';
import React from 'react';
import Header from 'components/Header';
import RowProduct from 'components/RowProduct';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <>
      <Header />
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}>
          <RowProduct />
          <RowProduct />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
