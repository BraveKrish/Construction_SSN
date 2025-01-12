import React from "react";

import about_1 from "../../../public/about_1.jpg";
import worker from "../../../public/worker.png";
import certificate from "../../../public/certificate.png";
import Image from "next/image";

const AboutInfo = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-items-center gap-5">
          <div>
            <Image
              src={about_1}
              alt="about Image"
              className="max-w-full h-full object-cover"
            />
          </div>
          <div>
            <h5 className="uppercase text-base font-medium text-main-color tracking-widest pb-2">
              our services
            </h5>
            <h2 className="capitalize text-[40px] font-extrabold text-[#0E121D] tracking-wide leading-[1.2]">
              We Are Always Think On <br />
              Your Dream
            </h2>
            <p className="text-[#1D1D1D] py-4">
              Join us on our journey as we strive to set new benchmarks in the construction industry, one project at a time. Thank you for considering SSN Builders. We look forward to work with you and turn your vision into reality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
              {/* below services card start */}
              {/* Card 1 */}
              <div className="bg-[#F8F8F8] flex flex-col gap-2 py-6 px-6">
                <Image
                  src={worker}
                  alt="Worker Image"
                  className="w-[60px] h-[60px] object-cover"
                />
                <h6 className="text-title-color text-lg font-semibold">
                  Quality And Expert Team Members
                </h6>
                <p className="text-[#1D1D1D] text-sm font-medium">
                  Initial phase involving project conceptualization, design, and obtaining necessary.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F8F8F8] flex flex-col gap-2 py-6 px-6">
                <Image
                  src={certificate}
                  alt="Certificate Image"
                  className="w-[60px] h-[60px] object-cover"
                />
                <h6 className="text-title-color text-lg font-semibold">
                  Certified & Awards Winner
                </h6>
                <p className="text-[#1D1D1D] text-sm font-medium">
                  Initial phase involving project conceptualization, design, and obtaining necessary.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F8F8F8] flex flex-col gap-2 py-6 px-6">
                <Image
                  src={worker}
                  alt="Tools Image"
                  className="w-[60px] h-[60px] object-cover"
                />
                <h6 className="text-title-color text-lg font-semibold">
                  Advanced Tools & Technology
                </h6>
                <p className="text-[#1D1D1D] text-sm font-medium">
                  Utilizing state-of-the-art tools and modern technologies to ensure quality outcomes.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#F8F8F8] flex flex-col gap-2 py-6 px-6">
                <Image
                  src={worker}
                  alt="Support Image"
                  className="w-[60px] h-[60px] object-cover"
                />
                <h6 className="text-title-color text-lg font-semibold">
                  24/7 Customer Support
                </h6>
                <p className="text-[#1D1D1D] text-sm font-medium">
                  Always ready to assist our clients with any queries or project updates.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-[#F8F8F8] flex flex-col gap-2 py-6 px-6">
                <Image
                  src={certificate}
                  alt="Experience Image"
                  className="w-[60px] h-[60px] object-cover"
                />
                <h6 className="text-title-color text-lg font-semibold">
                  Decades of Experience
                </h6>
                <p className="text-[#1D1D1D] text-sm font-medium">
                  With years of experience in the construction industry, we deliver excellence.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-[#F8F8F8] flex flex-col gap-2 py-6 px-6">
                <Image
                  src={worker}
                  alt="Safety Image"
                  className="w-[60px] h-[60px] object-cover"
                />
                <h6 className="text-title-color text-lg font-semibold">
                  Commitment to Safety
                </h6>
                <p className="text-[#1D1D1D] text-sm font-medium">
                  Safety is our top priority, ensuring a secure and healthy work environment.
                </p>
              </div>
            </div>
            {/* below services card end */}

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
