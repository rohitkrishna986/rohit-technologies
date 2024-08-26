import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { FaArrowRight } from "react-icons/fa";

const GetQuoteButton = ({name}) => {
  return (
      <div className="inline-flex h-11 px-2 animate-shimmer items-center justify-center rounded-full border border-white/50 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <Modal>
          <ModalTrigger className="bg-transparent text-white flex justify-center group/modal-btn">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              {name}
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              <FaArrowRight />
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent className="">Hi</ModalContent>
            <ModalFooter className="bg-slate-900">F</ModalFooter>
          </ModalBody>
        </Modal>
      </div>

  );
};

export default GetQuoteButton;
