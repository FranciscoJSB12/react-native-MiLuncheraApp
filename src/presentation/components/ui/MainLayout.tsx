import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { lightThemeColors } from '../../../config/theme/global-theme';

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          paddingTop: top + 20,
        },
        styles.container,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: lightThemeColors.lightGray,
  },
});
