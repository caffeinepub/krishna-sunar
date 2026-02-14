import { useParams, Link } from '@tanstack/react-router';
import { ArrowLeft, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useProductsBySector, useSectors } from '@/hooks/useCatalog';
import { ProductCard } from '@/components/catalog/ProductCard';

export default function SectorPage() {
  const { sectorId } = useParams({ from: '/sector/$sectorId' });
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: sectors } = useSectors();
  const { data: products, isLoading } = useProductsBySector(BigInt(sectorId));

  const sector = sectors?.find((s) => s.id.toString() === sectorId);

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4 hover:bg-primary/10 hover:text-primary">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {sector?.name || 'Products'}
            </h1>
            <p className="text-lg text-muted-foreground">{sector?.description}</p>
          </div>
          <Badge variant="secondary" className="w-fit bg-primary/20 text-primary border-primary/30">
            {filteredProducts?.length || 0} Products
          </Badge>
        </div>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 glass border-primary/20 focus:border-primary/40"
          />
        </div>
      </div>

      {/* Products Grid */}
      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="glass">
              <CardHeader>
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredProducts && filteredProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <Card className="glass p-12 text-center border-primary/20">
          <p className="text-muted-foreground">No products found in this category.</p>
        </Card>
      )}
    </div>
  );
}
