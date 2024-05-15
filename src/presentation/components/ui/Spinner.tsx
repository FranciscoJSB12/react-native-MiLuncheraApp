import { View, ActivityIndicator, Text } from 'react-native';
import { lightThemeColors } from '../../../config/theme/global-theme';

export const Spinner = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator
        size={40}
        color={lightThemeColors.darkBlue}
      />
      <Text></Text>
    </View>
  );
};
