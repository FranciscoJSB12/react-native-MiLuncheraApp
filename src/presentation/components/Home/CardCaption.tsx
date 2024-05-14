import { View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface Props {
  item: any;
}

export const CardCaption = ({ item }: Props) => {
  return (
    <View style={styles.captionContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>$ {item.price}</Text>
      <Pressable
        style={styles.pressablebtn}
        onPress={() => console.log(item.name)}
      >
        <View style={styles.btnContainer}>
          <MaterialCommunityIcons
            name='plus'
            size={24}
            color='#FFF'
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
