export interface Product {
    id:          string;
    name:        string;
    category:    'Comidas' | 'Bebidas' | 'Postres';
    description: string;
    price:       string;
    image:       string;
}