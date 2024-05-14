import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  product: any;
}

export const ProductCardCaption = ({ product }: Props) => {
  return (
    <View style={styles.captionContainer}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
      <Pressable
        style={styles.pressablebtn}
        onPress={() => console.log(product.name)}
      >
        <View style={styles.btnContainer}>
          <Ionicons
            name='add'
            size={24}
            color='white'
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    flex: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 8,
  },
  name: {
    color: '#172554',
    fontWeight: '800',
    fontSize: 16,
  },
  price: {
    color: '#b45309',
    fontWeight: '800',
    fontSize: 18,
  },
  btnContainer: {
    backgroundColor: '#f59e0b',
    padding: 4,
    borderRadius: 4,
  },
  pressablebtn: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
});
