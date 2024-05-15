import { useEffect, useState } from 'react';
import type { Product } from '../../../domain/entities/product';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { HomeHeader } from '../../components/Home/HomeHeader';
import { CategoryBar } from '../../components/Home/CategoryBar';
import { ProductList } from '../../components/Home/ProductList';
import { MainLayout } from '../../components/ui/MainLayout';
import { Spinner } from '../../components/ui/Spinner';

export const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProductsByPage()
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  if (!(products.length > 0)) {
    return <Spinner />;
  }

  return (
    <MainLayout>
      <HomeHeader>
        <CategoryBar />
      </HomeHeader>
      <ProductList items={products} />
    </MainLayout>
  );
};
