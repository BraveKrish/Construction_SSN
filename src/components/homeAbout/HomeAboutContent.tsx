import React from "react";
import signature from "../../../public/signature.png";
import Image from "next/image";

const HomeAboutContent = () => {
  return (
    <>
      <div>
        <p className="text-2xl uppercase tracking-[0.2em] text-main-color">
          Welcome to {" "}
          <span className="bg-main-color inline-block text-white text-[14px] relative bottom-3 py-3 px-5 rounded-[30px]">
            SSN Constructions
          </span>{" "}
        </p>
      </div>
      <div className="py-5">
        <h1 className="text-[#0E121D] text-5xl font-extrabold">
          Your Trusted Partner in <span className="text-main-color">Construction</span> Excellence
        </h1>
      </div>

      <div>
        <p className="text-[#64656a] text-base tracking-wider leading-[28px] text-justify">
          At SSN Builders, our journey is defined by a relentless pursuit of top-class quality and a commitment to excellence in every project we undertake. With a vision to become pioneers in the construction industry, we continuously innovate and adapt to the latest technologies and methodologies, ensuring that our work not only meets but exceeds industry standards.
          Our seamless services are designed to provide a hassle-free experience for our clients, from the initial consultation to the final handover. We believe that every project is unique, and we offer personalized attention to ensure that each client&apos;s specific needs and preferences are met with precision and care.
          Community focus is at the heart of our operations. We understand the importance of building not just structures, but also relationships and trust within the communities we serve. SSN Builders is here to provide unparalleled expertise. Together, let's create spaces that inspire and endure your dream home, and commercial spaces or embark on a large-scale construction project.


        </p>
        <p className="text-[#64656a] text-base tracking-wider leading-[28px] pt-4 text-justify">
          At SSN Builders, we are more than just a construction company; we are a team of dedicated professionals who are passionate about creating spaces that inspire and endure. Our commitment to excellence drives us to deliver projects that stand the test of time, reflecting our unwavering dedication to quality and innovation.
          Join us on our journey as we strive to set new benchmarks in the construction industry, one project at a time. Thank you for considering SSN Builders. We look forward to work with you and turn your vision into reality.
        </p>
      </div>
      {/* <div className="block pt-14">
        <Image
          src={signature}
          alt="Signature Image"
          className="max-w-full h-full object-cover"
        />
      </div> */}
    </>
  );
};

export default HomeAboutContent;
