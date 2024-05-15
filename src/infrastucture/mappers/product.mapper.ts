import { ProductsAPIResponse } from "../interfaces/mi-lunchera-products.response";
import { Product } from "../../domain/entities/product";

const categories: ['Comidas', 'Bebidas', 'Postres'] = ['Comidas', 'Bebidas', 'Postres'];

export class ProductMapper {
    static apiProductToEntity(apiProduct: ProductsAPIResponse): Product {
        return {
            ...apiProduct,
            category: categories[Math.floor(Math.random() * 3)]
        }
    }
}