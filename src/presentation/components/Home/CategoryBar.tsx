import { useState } from 'react';
import { ScrollView } from 'react-native';
import { CategoryBtn } from './CategoryBtn';

export const CategoryBar = () => {
  const [currentCategories, setCurrentCategories] = useState(defaultCategories);

  const selectActiveCategory = (id: number): void => {
    setCurrentCategories(category => {
      return category.map(category =>
        id === category.id
          ? { ...category, isActive: true }
          : { ...category, isActive: false }
      );
    });
  };

  return (
    <ScrollView
      style={{
        paddingVertical: 20,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {currentCategories.map(category => (
        <CategoryBtn
          key={category.id}
          isActive={category.isActive}
          categoryName={category.name}
          iconName={category.icon}
          onPress={() => selectActiveCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
};

const defaultCategories = [
  {
    id: 1,
    name: 'Comidas',
    icon: 'food-drumstick-outline',
    isActive: true,
  },
  {
    id: 2,
    name: 'Bebidas',
    icon: 'bottle-soda-classic-outline',
    isActive: false,
  },
  {
    id: 3,
    name: 'Postres',
    icon: 'cupcake',
    isActive: false,
  },
];
