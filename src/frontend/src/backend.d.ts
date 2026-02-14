import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Sector {
    id: SectorId;
    name: string;
    description: string;
}
export type ProductId = bigint;
export type SectorId = bigint;
export interface Product {
    id: ProductId;
    name: string;
    description: string;
    sector: SectorId;
    advantages: Array<string>;
    disadvantages: Array<string>;
    price: bigint;
}
export interface backendInterface {
    getAllProducts(): Promise<Array<Product>>;
    getProductById(productId: ProductId): Promise<Product | null>;
    getProductsByPriceRange(minPrice: bigint, maxPrice: bigint): Promise<Array<Product>>;
    getProductsBySector(sectorId: SectorId): Promise<Array<Product>>;
    getSectors(): Promise<Array<Sector>>;
    searchProductsByName(searchTerm: string): Promise<Array<Product>>;
}
