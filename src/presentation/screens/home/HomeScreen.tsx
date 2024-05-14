import { useEffect, useState } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ProductsAPIResponse } from '../../../infrastucture/interfaces/mi-lunchera-products.response';
import { productsApi } from '../../../config/api/productsApi';
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
        <Ionicons
          name='search-outline'
          size={36}
          color='#172554'
          style={{
            position: 'absolute',
            top: 10,
            right: 28,
          }}
        />
        <ScrollView
          style={{
            paddingVertical: 20,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              marginRight: 20,
              backgroundColor: '#172554',
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Text>
              <MaterialCommunityIcons
                name='food-drumstick-outline'
                size={24}
                color='#FFF'
              />
            </Text>
            <Text
              style={{
                color: '#FFF',
                fontSize: 16,
              }}
            >
              Comidas
            </Text>
          </View>
          <View
            style={{
              marginRight: 20,
              backgroundColor: '#e5e7eb',
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Text>
              <MaterialCommunityIcons
                name='bottle-soda-classic-outline'
                size={24}
                color='#172554'
              />
            </Text>
            <Text
              style={{
                color: '#172554',
                fontSize: 16,
              }}
            >
              Bebidas
            </Text>
          </View>
          <View
            style={{
              marginRight: 20,
              backgroundColor: '#e5e7eb',
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Text>
              <MaterialCommunityIcons
                name='cupcake'
                size={24}
                color='#172554'
              />
            </Text>
            <Text
              style={{
                color: '#172554',
                fontSize: 16,
              }}
            >
              Postres
            </Text>
          </View>
        </ScrollView>
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
