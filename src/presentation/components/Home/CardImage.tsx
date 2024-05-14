import { View, Image, StyleSheet } from 'react-native';

interface Props {
  item: any;
}

export const CardImage = ({ item }: Props) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: item.image }}
        resizeMode='cover'
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 4,
    padding: 8,
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 16,
  },
});
