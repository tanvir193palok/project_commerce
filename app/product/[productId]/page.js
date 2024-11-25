import ImageGallery from "@/components/product/ImageGallery";
import ProductDescription from "@/components/product/ProductDescription";
import RelatedProducts from "@/components/product/RelatedProducts";

const ProductPage = () => {
  return (
    <>
      <p className="px-28 pt-10">
        Feature Product / <span className="text-primary">New Arrival</span>
      </p>

      <div className="flex px-28 pt-4 gap-28">
        <ImageGallery />
        <ProductDescription />
      </div>

      <RelatedProducts />
    </>
  );
};

export default ProductPage;
