import React from "react";

const WhoWeAreSection = () => {
  return (
    <div className=" font-special text-white mx-auto md:mx-10 max-w-7xl px-4 my-40 pb-0 md:pb-5 lg:px-8 rounded-3xl bg-no-repeat object-cover relative bg-yellow">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        <div className="pt-24 lg:pl-24 ">
          <h3 className="uppercase text-xl font-special  mb-5 tracking-widest text-center lg:text-start">
            Who We Are
          </h3>
          <h4 className="md:text-6xl sm:text-3xl font-bold  mb-8 leading-snug text-center lg:text-start">
            We are a digital
            <br />
            agency that builds
            
            amazing products.
          </h4>
          <div className="text-center lg:text-start">
            <button className="text-xl font-semibold text-white bg-teal py-4 px-12 hover:bg-hoblue rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:absolute top-[12px] right-0">
            <img src="assets\girldoodle.svg" alt="girldoodle"  decoding="async" loading="lazy" className="block align-middle max-w-full h-auto text-transparent" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
