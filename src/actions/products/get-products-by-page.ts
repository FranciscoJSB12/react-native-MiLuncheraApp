import { productsApi } from "../../config/api/productsApi";
import { Product } from "../../domain/entities/product";
import type { ProductsAPIResponse } from "../../infrastucture/interfaces/mi-lunchera-products.response";
import { ProductMapper } from "../../infrastucture/mappers/product.mapper";

export const getProductsByPage = async ():Promise<Product[]> => {
    try {
        const { data } = await productsApi.get<ProductsAPIResponse[]>('/products');
        return data.map(ProductMapper.apiProductToEntity);
    } catch (err) {
        console.log(err);
        throw new Error('Error gettting products');
    }
}