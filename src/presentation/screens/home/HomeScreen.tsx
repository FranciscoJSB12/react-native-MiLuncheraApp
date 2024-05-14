import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  Image,
  Pressable,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProductsAPIResponse } from '../../../infrastucture/interfaces/mi-lunchera-products.response';
import { productsApi } from '../../../config/api/productsApi';

export const HomeScreen = () => {
  const [products, setProducts] = useState<ProductsAPIResponse[]>([]);
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

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
      {products.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 4,
          }}
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <View
              style={{
                width: width * 0.425,
                height: width * 0.6,
                marginHorizontal: 8,
                marginVertical: 12,
                borderRadius: 16,
                backgroundColor: '#e5e7eb',
                elevation: 20,
              }}
            >
              <View
                style={{
                  flex: 4,
                  padding: 4,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  resizeMode='cover'
                  style={{
                    flex: 1,
                    width: '100%',
                    borderRadius: 16,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                  padding: 8,
                }}
              >
                <Text>{item.name}</Text>
                <Text
                  style={{
                    color: '#b45309',
                    fontWeight: '600',
                  }}
                >
                  $ {item.price}
                </Text>
                <Pressable
                  style={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                  }}
                  onPress={() => console.log(item.name)}
                >
                  <View
                    style={{
                      backgroundColor: '#f59e0b',
                      padding: 4,
                      borderRadius: 4,
                    }}
                  >
                    <Ionicons
                      name='add'
                      size={24}
                      color='white'
                    />
                  </View>
                </Pressable>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};
