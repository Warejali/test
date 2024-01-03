import Image from "next/image";
import React from "react";

import Link from "next/link";
import image1 from "../public/1.png";
import image2 from "../public/2.jpeg";
import image3 from "../public/3.jpeg";
import image4 from "../public/4.jpg";

const Info = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="card glass">
          <figure>
            <Image src={image1} alt="logo" width={320} height={320} />
          </figure>
          <div className="card-body">
            <Link href={"/"}>
              <a className="card-title  hover:text-red-900">
                <span className="bg-slate-100 rounded-lg p-2">Find a job</span>
              </a>
            </Link>
            <p>
              Public and private sector job opportunities or hiring programs,
              apply or extend a work permit, get a Social Insurance Number, a
              criminal record check or security clearance.
            </p>
          </div>
        </div>
        <div className="card glass">
          <figure>
            <Image src={image2} alt="logo" width={320} height={320} />
          </figure>
          <div className="card-body">
            <Link href={"/"}>
              <a className="card-title  hover:text-red-900">
                <span className="bg-slate-100 rounded-lg p-2">
                  Funding for jobs and training
                </span>
              </a>
            </Link>
            <p>
              Find funding programs, grants and contributions that help support
              jobs, training, and social development. safety standards and labour relations programs.
            </p>
          </div>
        </div>
        <div className="card glass">
          <figure>
            <Image src={image3} alt="logo" width={320} height={320} />
          </figure>
          <div className="card-body">
            <Link href={"/"}>
              <a className="card-title  hover:text-red-900">
                <span className="bg-slate-100 rounded-lg p-2">
                  Workplace standards
                </span>
              </a>
            </Link>
            <p>
              Federal and provincial labour laws, workplace standards, federal
              health and safety standards and labour relations programs.
            </p>
          </div>
        </div>
        <div className="card glass">
          <figure>
            <Image src={image4} alt="logo" width={320} height={320} />
          </figure>
          <div className="card-body">
            <Link href={"/"}>
              <a className="card-title  hover:text-red-900">
                <span className="bg-slate-100 rounded-lg p-2">
                  Sustainable Jobs Plan
                </span>
              </a>
            </Link>
            <p>
              Plan to advance economic growth and sustainable jobs in every
              region of the country. Employer and personal pensions, federal benefits and registered retirement savings plans 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
