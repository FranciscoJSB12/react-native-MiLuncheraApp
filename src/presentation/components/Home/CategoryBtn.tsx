import { View, Text, StyleSheet, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface Props {
  isActive: boolean;
  categoryName: string;
  iconName: string;
  onPress: () => void;
}

export const CategoryBtn = ({
  isActive,
  categoryName,
  iconName,
  onPress,
}: Props) => {
  const textColor = isActive ? '#FFF' : '#172554';

  return (
    <Pressable onPress={() => onPress()}>
      <View
        style={[
          {
            backgroundColor: isActive ? '#172554' : '#e5e7eb',
          },
          styles.container,
        ]}
      >
        <Text>
          <MaterialCommunityIcons
            //@ts-ignore
            name={iconName}
            size={24}
            color={textColor}
          />
        </Text>
        <Text
          style={{
            color: textColor,
            fontSize: 16,
          }}
        >
          {categoryName}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
