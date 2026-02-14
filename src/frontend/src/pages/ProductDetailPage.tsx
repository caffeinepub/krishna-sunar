import { useParams, Link } from '@tanstack/react-router';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useProductById, useSectors } from '@/hooks/useCatalog';

export default function ProductDetailPage() {
  const { productId } = useParams({ from: '/product/$productId' });
  const { data: product, isLoading } = useProductById(BigInt(productId));
  const { data: sectors } = useSectors();

  const sector = sectors?.find((s) => s.id === product?.sector);

  if (isLoading) {
    return (
      <div className="container py-8 md:py-12">
        <Skeleton className="h-10 w-32 mb-8" />
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="glass">
            <CardHeader>
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-12 w-32" />
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-8 md:py-12">
        <Card className="glass p-12 text-center border-primary/20">
          <p className="text-muted-foreground mb-4">Product not found.</p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/">Return to Home</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <Button variant="ghost" asChild className="mb-8 hover:bg-primary/10 hover:text-primary">
        <Link to="/sector/$sectorId" params={{ sectorId: product.sector.toString() }}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {sector?.name || 'Category'}
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Product Info */}
        <Card className="glass border-primary/20 hover:border-primary/40 transition-all">
          <CardHeader>
            <div className="flex items-start justify-between gap-4 mb-2">
              <CardTitle className="text-3xl text-primary">{product.name}</CardTitle>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                {sector?.name}
              </Badge>
            </div>
            <CardDescription className="text-base">{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary glow-sapphire">${Number(product.price)}</span>
              <span className="text-muted-foreground">USD</span>
            </div>
          </CardContent>
        </Card>

        {/* Advantages & Disadvantages */}
        <div className="space-y-6">
          <Card className="glass border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <CheckCircle2 className="h-5 w-5" />
                Advantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              {product.advantages.length > 0 ? (
                <ul className="space-y-2">
                  {product.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No advantages listed.</p>
              )}
            </CardContent>
          </Card>

          <Card className="glass border-destructive/20 hover:border-destructive/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <XCircle className="h-5 w-5" />
                Disadvantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              {product.disadvantages.length > 0 ? (
                <ul className="space-y-2">
                  {product.disadvantages.map((disadvantage, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>{disadvantage}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No disadvantages listed.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-12 bg-primary/20" />

      {/* Additional Info */}
      <Card className="glass border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Product Details</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-sm text-muted-foreground mb-1">Category</dt>
              <dd>{sector?.name}</dd>
            </div>
            <div>
              <dt className="font-semibold text-sm text-muted-foreground mb-1">Price</dt>
              <dd className="text-primary font-semibold">${Number(product.price)}</dd>
            </div>
            <div>
              <dt className="font-semibold text-sm text-muted-foreground mb-1">Product ID</dt>
              <dd className="font-mono text-sm">{product.id.toString()}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}
