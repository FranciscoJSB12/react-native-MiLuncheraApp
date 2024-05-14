import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ProductsAPIResponse } from '../../../infrastucture/interfaces/mi-lunchera-products.response';
import { productsApi } from '../../../config/api/productsApi';
import { CardImage } from '../../components/Home/CardImage';
import { CardCaption } from '../../components/Home/CardCaption';
import { Card } from '../../components/Home/Card';
import { CategoryBar } from '../../components/Home/CategoryBar';

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
      style={{
        flex: 1,
        paddingTop: top + 20,
        alignItems: 'center',
        paddingBottom: 40,
        backgroundColor: '#f3f4f6',
      }}
    >
      <View
        style={{
          width: '100%',
          paddingHorizontal: 28,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: '800',
            color: '#172554',
            fontStyle: 'italic',
          }}
        >
          Mi lunchera
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '800',
            color: '#172554',
          }}
        >
          Menú del día
        </Text>
        <MaterialCommunityIcons
          name='store-search-outline'
          size={36}
          color='#172554'
          style={{
            position: 'absolute',
            top: 10,
            right: 28,
          }}
        />
        <CategoryBar />
      </View>
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
        <Text>Loading</Text>
      )}
    </View>
  );
};
