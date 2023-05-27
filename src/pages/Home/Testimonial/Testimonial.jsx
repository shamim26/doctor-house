import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import { Navigation } from "swiper";
import person from "../../../assets/person.png";
import quote from "../../../assets/icons/Quote_1_.png";

const Testimonial = () => {
  return (
    <div className="container w-4/5 mx-auto my-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">What Our Patients Says</h1>
        <p className="px-32">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="mt-10 relative">
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="border p-12 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center gap-3">
                <img src={person} alt="" />
                <h4 className="font-bold text-lg">
                  Awlad Hossain{" "}
                  <span className="block font-normal text-base">
                    Product Designer
                  </span>
                </h4>
              </div>
              <img src={quote} alt="" />
            </div>
            <p className="mt-4">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </SwiperSlide>
          <SwiperSlide className="border p-12 rounded-lg">
            {" "}
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center gap-3">
                <img src={person} alt="" />
                <h4 className="font-bold text-lg">
                  Farhan Hossain{" "}
                  <span className="block font-normal text-base">
                    Brand Designer
                  </span>
                </h4>
              </div>
              <img src={quote} alt="" />
            </div>
            <p className="mt-4">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </SwiperSlide>
          <SwiperSlide className="border p-12 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center gap-3">
                <img src={person} alt="" />
                <h4 className="font-bold text-lg">
                  Mahir Hossain{" "}
                  <span className="block font-normal text-base">Executive</span>
                </h4>
              </div>
              <img src={quote} alt="" />
            </div>
            <p className="mt-4">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </SwiperSlide>
        </Swiper>
        <div className=" absolute top-1/2  z-10 transform -translate-y-1/2 items-center flex">
          <button className="swiper-button-prev md:mr-[1170px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="swiper-button-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
