import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Product, Sector, ProductId, SectorId } from '@/backend';

export function useSectors() {
  const { actor, isFetching } = useActor();

  return useQuery<Sector[]>({
    queryKey: ['sectors'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSectors();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useProductsBySector(sectorId: SectorId) {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ['products', 'sector', sectorId.toString()],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProductsBySector(sectorId);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useProductById(productId: ProductId) {
  const { actor, isFetching } = useActor();

  return useQuery<Product | null>({
    queryKey: ['product', productId.toString()],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getProductById(productId);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllProducts() {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ['products', 'all'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSearchProducts(searchTerm: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ['products', 'search', searchTerm],
    queryFn: async () => {
      if (!actor || !searchTerm) return [];
      return actor.searchProductsByName(searchTerm);
    },
    enabled: !!actor && !isFetching && searchTerm.length > 0,
  });
}

export function useProductsByPriceRange(minPrice: bigint, maxPrice: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ['products', 'price', minPrice.toString(), maxPrice.toString()],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProductsByPriceRange(minPrice, maxPrice);
    },
    enabled: !!actor && !isFetching,
  });
}
