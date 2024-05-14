import { ReactNode } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';

interface Props {
  children: ReactNode;
}

export const ProductCard = ({ children }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={[
        styles.cardContainer,
        {
          width: width * 0.425,
          height: width * 0.6,
        },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 8,
    marginVertical: 12,
    borderRadius: 16,
    backgroundColor: '#e5e7eb',
    elevation: 20,
  },
});
