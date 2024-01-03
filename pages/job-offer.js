import Image from "next/image";
import React from "react";

import Link from "next/link";
import Layout from "../components/Layout";
import image1 from "../public/01.jpeg";
import image2 from "../public/02.jpg";
import image3 from "../public/03.jpeg";
import image4 from "../public/04.jpg";
import CADOperator from "../public/CADOperator.jpg";
import crane from "../public/crane.jpg";
import foreman from "../public/foreman.jpg";
import jcb from "../public/jcb.jpeg";

const JobOffer = () => {

  return (
    <Layout title="Job Offer">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="card glass">
          <figure>
            <Image src={image1} alt="logo" width={320} height={320} />
          </figure>
          <div className="card-body">
            <Link href={"/"}>
              <a className="card-title  hover:text-red-900">
                <span className="bg-slate-100 rounded-lg p-2">supervisor</span>
              </a>
            </Link>
            <p>
              The average salary for Supervisor is $62,423 per year in the Canada. The average additional cash compensation for a Supervisor in the Canada is $8,467, with a range from $2,800 - $25,601.
            </p>
            <div className="card-actions">
            <Link href="/application">
                <a>
                  <button className="btn btn-primary">Apply for Visa</button>
                </a>
              </Link>
            </div>


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
                  Office Boy
                </span>
              </a>
            </Link>
            <p>
              How much does a Office boy make in Canada? If we look at the Office boy salary statistics in Canada as of September 27, 2023, the represented employee makes $46,506; to be more precise pay rate is $3,875 per month, $894 per week, or $23.16 per hour.
            </p>
            <div className="card-actions">
            <Link href="/application">
                <a>
                  <button className="btn btn-primary">Apply for Visa</button>
                </a>
              </Link>
            </div>
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
                  Safety Officer
                </span>
              </a>
            </Link>
            <p>
              How much does a Safety officer make in Canada? The average safety officer salary in Canada is $76,035 per year or $38.99 per hour. Entry-level positions start at $57,475 per year, while most experienced workers make up to $101,219 per year.
            </p>
            <div className="card-actions">
            <Link href="/application">
                <a>
                  <button className="btn btn-primary">Apply for Visa</button>
                </a>
              </Link>
            </div>
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
                  Wall painters
                </span>
              </a>
            </Link>
            <p>
              How much does a House painter make in Canada? The average house painter salary in Canada is $38,400 per year or $19.69 per hour. Entry-level positions start at $33,150 per year, while most experienced workers make up to $46,840 per year.
            </p>
            <div className="card-actions">
              <Link href="/application">
                <a>
                  <button className="btn btn-primary">Apply for Visa</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card glass">
          <figure>
            <Image src={CADOperator} alt="logo" width={320} height={320} />
          </figure>
          <div className="card-body">
            <Link href={"/"}>
              <a className="card-title  hover:text-red-900">
                <span className="bg-slate-100 rounded-lg p-2">
                Autocad operator 
                </span>
              </a>
            </Link>
            <p>
            How much does a Cad operator make in Canada? The average cad operator salary in Canada is $46,800 per year or $24 per hour. Entry-level positions start at $37,050 per year, while most experienced workers make up to $75,109 per year.
            </p>
            <div className="card-actions">
              <Link href="/application">
                <a>
                  <button className="btn btn-primary">Apply for Visa</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card glass">
          <figure>
            <Image src={crane} alt="logo" width={320} height={320} />
          </figure>
          <div className="card-body">
            <Link href={"/"}>
              <a className="card-title  hover:text-red-900">
                <span className="bg-slate-100 rounded-lg p-2">
                Crane Operator 
                </span>
              </a>
            </Link>
            <p>
            The average crane operator salary in Canada is $62,702 per year or $32.16 per hour. Entry-level positions start at $44,616 per year, while most experienced workers make up to $83,798 per year.
            </p>
            <div className="card-actions">
              <Link href="/application">
                <a>
                  <button className="btn btn-primary">Apply for Visa</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card glass">
          <figure>
            <Image src={jcb} alt="logo" width={320} height={320} />
          </figure>
          <div className="card-body">
            <Link href={"/"}>
              <a className="card-title  hover:text-red-900">
                <span className="bg-slate-100 rounded-lg p-2">
                JCB Operator 
                </span>
              </a>
            </Link>
            <p>
            How much does a Jcb operator make in Canada? If we look at the Jcb operator salary statistics in Canada as of October 4, 2023, the represented employee makes $68,271; to be more precise pay rate is $5,689 per month, $1,313 per week, or $34 per hour.
            </p>
            <div className="card-actions">
              <Link href="/application">
                <a>
                  <button className="btn btn-primary">Apply for Visa</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card glass">
          <figure>
            <Image src={foreman} alt="logo" width={320} height={320} />
          </figure>
          <div className="card-body">
            <Link href={"/"}>
              <a className="card-title  hover:text-red-900">
                <span className="bg-slate-100 rounded-lg p-2">
                Foreman 
                </span>
              </a>
            </Link>
            <p>
            GED equivalent. The average foreman salary in Canada is $58,500 per year or $30 per hour. Entry-level positions start at $45,576 per year, while most experienced workers make up to $78,000 per year.
            </p>
            <div className="card-actions">
              <Link href="/application">
                <a>
                  <button className="btn btn-primary">Apply for Visa</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobOffer;
