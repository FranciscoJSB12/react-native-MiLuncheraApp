import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { Product } from '../../../domain/entities/product';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { HomeHeader } from '../../components/Home/HomeHeader';
import { CardImage } from '../../components/Home/CardImage';
import { CardCaption } from '../../components/Home/CardCaption';
import { Card } from '../../components/Home/Card';
import { lightThemeColors } from '../../../config/theme/global-theme';

export const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    getProductsByPage()
      .then(data => setProducts(data))
      .catch(err => console.log(err));
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
    backgroundColor: lightThemeColors.lightGray,
  },
});
