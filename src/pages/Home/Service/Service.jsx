import React from "react";
import doctor from "../../../assets/doctor.png";

const Service = () => {
  return (
    <div className="container w-4/5 mx-auto my-32">
      <div className="flex gap-6">
        <img src={doctor} alt="" />
        <div>
          <h2 className="text-4xl font-bold mb-5">Our Services</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
