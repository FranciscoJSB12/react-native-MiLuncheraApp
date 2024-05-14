import { View, Image, StyleSheet } from 'react-native';

interface Props {
  product: any;
}

export const ProductCardImage = ({ product }: Props) => {
  return (
    <View style={styles.image}>
      <Image
        source={{ uri: product.image }}
        resizeMode='cover'
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 4,
    padding: 4,
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 16,
  },
});
