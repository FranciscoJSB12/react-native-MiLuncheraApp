import { FlatList } from 'react-native';
import type { Product } from '../../../domain/entities/product';
import { Card } from './Card';
import { CardCaption } from './CardCaption';
import { CardImage } from './CardImage';

interface Props {
  items: Product[];
}

export const ProductList = ({ items }: Props) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 4,
      }}
      data={items}
      numColumns={2}
      renderItem={({ item }) => (
        <Card>
          <CardImage item={item} />
          <CardCaption item={item} />
        </Card>
      )}
      keyExtractor={item => item.id}
    />
  );
};
