import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProductsAPIResponse } from '../../../infrastucture/interfaces/mi-lunchera-products.response';
import { productsApi } from '../../../config/api/productsApi';
import { HomeHeader } from '../../components/Home/HomeHeader';
import { CardImage } from '../../components/Home/CardImage';
import { CardCaption } from '../../components/Home/CardCaption';
import { Card } from '../../components/Home/Card';

export const HomeScreen = () => {
  const [products, setProducts] = useState<ProductsAPIResponse[]>([]);
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    (async () => {
      const { data } = await productsApi.get<ProductsAPIResponse[]>(
        '/products'
      );

      setProducts(data);
    })();
  }, []);

  return (
    <View
      style={[
        {
          paddingTop: top + 20,
        },
        styles.container,
      ]}
    >
      <HomeHeader />
      {products.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 4,
          }}
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <Card>
              <CardImage item={item} />
              <CardCaption item={item} />
            </Card>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: '#f3f4f6',
  },
});
