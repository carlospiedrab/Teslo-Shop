import { Title } from "@/components";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  // if( id === 'kids') {
  //   notFound();
  // }
  const products = seedProducts.filter((product) => product.gender === id);
  const labels: Record<Category, string> = {
    men: "Men",
    women: "Women",
    kid: "Kids",
    unisex: "All",
  };
  return (
    <>
      <Title
        title={`Items for ${labels[id]}`}
        subtitle="All Products"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
