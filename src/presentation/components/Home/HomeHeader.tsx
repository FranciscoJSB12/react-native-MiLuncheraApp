import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { CategoryBar } from './CategoryBar';
import { lightThemeColors } from '../../../config/theme/global-theme';

export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Mi lunchera</Text>
      <Text style={styles.subTitle}>Menú del día</Text>
      <MaterialCommunityIcons
        name='store-search-outline'
        size={36}
        color={lightThemeColors.darkBlue}
        style={styles.iconStyle}
      />
      <CategoryBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 28,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: lightThemeColors.darkBlue,
    fontStyle: 'italic',
  },
  subTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: lightThemeColors.darkBlue,
  },
  iconStyle: {
    position: 'absolute',
    top: 10,
    right: 28,
  },
});
