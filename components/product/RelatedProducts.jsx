
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "./ProductCard";
import { NewArrivalData } from "@/lib";

const RelatedProducts = () => {
  return (
    <div className="px-28 my-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[28px] font-bold text-[#1D1D1D] pb-3">
            Related Products
          </p>
        </div>
        <div className="flex items-center mr-4">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="bg-white border border-primary text-primary rounded-full p-2 mx-2 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="bg-white border border-primary text-primary rounded-full p-2 cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white w-[1280px] h-[400px]">
        {NewArrivalData.map((product, index) => (
          <ProductCard key={index} product={product} isCategorized={true} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button className="py-2 px-6 bg-primary text-white rounded-lg hover:bg-primary-dark">
          See more
        </button>
      </div>
    </div>
  );
};

export default RelatedProducts;
