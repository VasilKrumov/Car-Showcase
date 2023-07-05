import { CarProps } from "@/types";

interface CarDetailsProps {
  car: CarProps;
  isOpen: boolean;
  closeModal: () => void;
}

const CarDetails = ({ car, closeModal, isOpen }: CarDetailsProps) => {
  return <div>car details</div>;
};

export default CarDetails;
