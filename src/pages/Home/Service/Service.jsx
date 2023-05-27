import React, { useState } from "react";
import doctor from "../../../assets/doctor.png";
import tooth from "../../../assets/teeth.png";

const Service = () => {
  const [active, setActive] = useState("cavity");
  return (
    <div className="container w-4/5 mx-auto my-32">
      <div className="flex justify-center gap-6">
        <img src={doctor} alt="" />
        <div>
          <h2 className="text-4xl font-bold mb-5">Our Services</h2>
          <p className="pr-16">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="mt-8 ">
            <div
              className=" flex justify-between w-[558px]   
             font-semibold border rounded-lg "
            >
              <button
                className={`py-5 px-4 rounded-lg transition-all ease-in-out duration-300 ${
                  active === "cavity" ? "bg-secondary-0 text-white" : ""
                }`}
                onClick={() => setActive("cavity")}
              >
                Cavity Protection
              </button>
              <button
                className={`py-5 px-4 rounded-lg transition-all ease-in-out duration-300 ${
                  active === "cosmetic" ? "bg-secondary-0 text-white" : ""
                }`}
                onClick={() => setActive("cosmetic")}
              >
                Cosmetic Density
              </button>
              <button
                className={`py-5 px-4 rounded-lg transition-all ease-in-out duration-300 ${
                  active === "oral" ? "bg-secondary-0 text-white" : ""
                }`}
                onClick={() => setActive("oral")}
              >
                Oral Surgery
              </button>
            </div>
            <div className="mt-10 space-y-5">
              <img src={tooth} alt="" />
              <h2 className="text-3xl font-bold">Electro Gastrology Therapy</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inve ntore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste
                natus error <br />
                <br />
                Sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
              </p>
              <button
                className="py-3 px-6 bg-transparent
               font-semibold text-secondary-0 border
                border-secondary-0 rounded-lg hover:bg-secondary-0 hover:text-white duration-300"
              >
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
