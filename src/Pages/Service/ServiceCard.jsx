import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 mt-3 shadow-xl">
        <figure><img src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="font-bold text-lg text-red-500">Price : $ {price}</p>
          <div className="card-actions justify-end">
            <AiOutlineArrowRight className="text-red font-extrabold text-3xl"></AiOutlineArrowRight>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;