"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { FaArrowRight, FaTelegramPlane } from "react-icons/fa";
import Swal from "sweetalert2";

const GetQuoteButton = ({ name }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "832c1ec5-fde3-4e25-b889-9857f087d10c");

    const object = Object.fromEntries(formData);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
    if (res.error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

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
          <ModalContent className="text-black">
            <div className="w-full">
              <div className="w-full mb-6 flex flex-col justify-center items-center">
                <h2 className="font-bold text-4xl">Get A Quote</h2>
                <p className="text-gray-500 text-center mt-4">
                  We&apos;re here to help and answer any question you might
                  have. We look forward to hearing from you
                </p>
              </div>
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-5 mb-8 justify-center"
              >
                <div className="grid relative">
                  <label
                    htmlFor="name"
                    className="absolute top-0 text-gray-500 text-[14px] left-14 rounded-lg bg-white px-1"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    id="name"
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="mt-3 bg-none outline-none text-sm p-4 rounded-lg border border-gray-400"
                  />
                </div>
                <div className="grid relative">
                  <label
                    htmlFor="email"
                    className="absolute top-0 text-gray-500 text-[14px] left-14 rounded-lg bg-white px-1"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="mt-3 bg-none outline-none text-sm p-4 rounded-lg border border-gray-400"
                  />
                </div>
                <div className="grid relative">
                  <label
                    htmlFor="message"
                    className="absolute top-0 text-gray-500 text-[14px] left-14 rounded-lg bg-white px-1"
                  >
                    Message
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    className="mt-3 bg-none outline-none resize-none text-sm p-4 rounded-lg border border-gray-400"
                  ></textarea>
                </div>
                <div className="px-4 flex justify-center">
                  <button className="flex items-center gap-2 bg-[rgb(20,20,20)] hover:bg-black text-white px-4 py-2 rounded-lg">
                    Send message
                    <span className="text-xl">
                      <FaTelegramPlane />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default GetQuoteButton;
