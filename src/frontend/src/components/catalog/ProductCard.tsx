import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Product } from '@/backend';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to="/product/$productId" params={{ productId: product.id.toString() }}>
      <Card className="glass h-full transition-all duration-300 hover:glow-sapphire cursor-pointer border-primary/20 hover:border-primary/40 group">
        <CardHeader>
          <div className="flex items-start justify-between gap-2 mb-2">
            <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </CardTitle>
            <Badge variant="secondary" className="flex-shrink-0 bg-primary/20 text-primary border-primary/30">
              ${Number(product.price)}
            </Badge>
          </div>
          <CardDescription className="line-clamp-2">{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {product.advantages.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-primary mb-1 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Advantages
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {product.advantages.slice(0, 2).map((advantage, index) => (
                    <li key={index} className="line-clamp-1">
                      • {advantage}
                    </li>
                  ))}
                  {product.advantages.length > 2 && (
                    <li className="text-xs">+{product.advantages.length - 2} more</li>
                  )}
                </ul>
              </div>
            )}

            {product.disadvantages.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-destructive mb-1 flex items-center gap-1">
                  <XCircle className="h-3 w-3" />
                  Disadvantages
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {product.disadvantages.slice(0, 2).map((disadvantage, index) => (
                    <li key={index} className="line-clamp-1">
                      • {disadvantage}
                    </li>
                  ))}
                  {product.disadvantages.length > 2 && (
                    <li className="text-xs">+{product.disadvantages.length - 2} more</li>
                  )}
                </ul>
              </div>
            )}

            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full mt-4 group-hover:bg-primary/10 group-hover:text-primary"
            >
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
