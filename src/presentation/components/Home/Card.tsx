import { ReactNode } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { lightThemeColors } from '../../../config/theme/global-theme';

interface Props {
  children: ReactNode;
}

export const Card = ({ children }: Props) => {
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
    backgroundColor: lightThemeColors.lightGray,
    elevation: 20,
  },
});
