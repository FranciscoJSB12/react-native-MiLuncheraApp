import { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  useWindowDimensions,
  Image,
  Pressable,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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
                <Text
                  style={{
                    color: '#172554',
                    fontWeight: '800',
                    fontSize: 16,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: '#b45309',
                    fontWeight: '800',
                    fontSize: 18,
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
