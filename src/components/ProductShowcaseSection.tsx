import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

export function ProductShowcaseSection() {
  return (
    <section className="paper-leaf-surface relative overflow-hidden px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-[11px] font-black uppercase tracking-[0.26em] text-earth">Produtos</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-[1.04] text-forest-900 sm:text-4xl lg:text-5xl">
            Conheça os sabores Natfoods
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-forest-800/78 sm:text-base">
            Uma linha de chips de banana da terra criada para diferentes momentos de consumo: do lanche rápido ao
            produto premium para gôndolas, empórios e marketplaces.
          </p>
        </div>

        <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
