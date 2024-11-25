import { NewArrivalData } from "@/lib";
import ProductCard from "../product/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NewArrival = () => {
  return (
    <div className="px-4 lg:px-28 my-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[16px] lg:text-[19px] text-[#7E53D4] uppercase">
            Featured Product
          </p>
          <p className="text-[23px] lg:text-[28px] font-bold text-[#1D1D1D] pb-3">
            New Arrivals
          </p>
        </div>
        <div className="flex items-center lg:mr-4">
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

      <div className="relative">

        <div className="flex space-x-2 overflow-x-auto md:hidden">
          {NewArrivalData.map((product, index) => (
            <div className="w-full sm:w-[300px]" key={index}>
              <ProductCard product={product} isCategorized={true} />
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-6 bg-white w-[1280px] h-[400px]">
          {NewArrivalData.map((product, index) => (
            <ProductCard key={index} product={product} isCategorized={true} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button className="py-2 px-6 bg-primary text-white rounded-lg hover:bg-primary-dark">
          See more
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
