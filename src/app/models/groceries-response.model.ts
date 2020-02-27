export interface GroceriesResponse {
    grocery: Grocery[];
}

export interface Grocery {
    id: string;
    image_url?: string;
    stock: number;
    productName: string;
    price: number;
    productDescription: string;
    favorite: number;
}
