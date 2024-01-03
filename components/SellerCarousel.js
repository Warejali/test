import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowUp, faCheck } from '@fortawesome/free-solid-svg-icons';

const SellerCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="flex gap-2 my-5">
        <h2 className="text-xl font-bold">Seller Q&A (4)</h2>
        <a className="text-secondary" href="">
          Ask a question
        </a>
      </div>
      <Carousel responsive={responsive}>
        <div className="card bg-base-100 shadow-xl mx-2">
          <div className="items-center px-10 py-5">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                className=" text-xl bg-gray-300 rounded-full p-2"
                icon={faUser}
              />
              <h2 className="flex items-center">
                <span className="text-md font-bold">AdityaSV</span>
                <span>
                  <FontAwesomeIcon
                    className="text-xs bg-green-500 text-white rounded-full p-[2px]"
                    icon={faCheck}
                  />
                </span>
              </h2>
              <FontAwesomeIcon className="" icon={faArrowUp} />
              <p>100</p>
            </div>
            <p className="mt-3">
              <span className="text-md font-bold">Q: </span>
              Do you wanna meet up in the Canton area? I stay here too with a
              535xi E61 that I won off of C&amp;B too! Hope that’s okay?
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex bg-slate-300 border-1 rounded-2xl px-2 gap-1">
                <p>18</p>
                <FontAwesomeIcon className="" icon={faArrowUp} />
              </div>
              <button className="text-secondary" type="button">
                View answer
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mx-2">
          <div className="items-center px-10 py-5">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                className=" text-xl bg-gray-300 rounded-full p-2"
                icon={faUser}
              />
              <h2 className="flex items-center">
                <span className="text-md font-bold">AdityaSV</span>
                <span>
                  <FontAwesomeIcon
                    className="text-xs bg-green-500 text-white rounded-full p-[2px]"
                    icon={faCheck}
                  />
                </span>
              </h2>
              <FontAwesomeIcon className="" icon={faArrowUp} />
              <p>100</p>
            </div>
            <p className="mt-3">
              <span className="text-md font-bold">Q: </span>
              Do you wanna meet up in the Canton area? I stay here too with a
              535xi E61 that I won off of C&amp;B too! Hope that’s okay?
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex bg-slate-300 border-1 rounded-2xl px-2 gap-1">
                <p>18</p>
                <FontAwesomeIcon className="" icon={faArrowUp} />
              </div>
              <button className="text-secondary" type="button">
                View answer
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mx-2">
          <div className="items-center px-10 py-5">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                className=" text-xl bg-gray-300 rounded-full p-2"
                icon={faUser}
              />
              <h2 className="flex items-center">
                <span className="text-md font-bold">AdityaSV</span>
                <span>
                  <FontAwesomeIcon
                    className="text-xs bg-green-500 text-white rounded-full p-[2px]"
                    icon={faCheck}
                  />
                </span>
              </h2>
              <FontAwesomeIcon className="" icon={faArrowUp} />
              <p>100</p>
            </div>
            <p className="mt-3">
              <span className="text-md font-bold">Q: </span>
              Do you wanna meet up in the Canton area? I stay here too with a
              535xi E61 that I won off of C&amp;B too! Hope that’s okay?
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex bg-slate-300 border-1 rounded-2xl px-2 gap-1">
                <p>18</p>
                <FontAwesomeIcon className="" icon={faArrowUp} />
              </div>
              <button className="text-secondary" type="button">
                View answer
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mx-2">
          <div className="items-center px-10 py-5">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                className=" text-xl bg-gray-300 rounded-full p-2"
                icon={faUser}
              />
              <h2 className="flex items-center">
                <span className="text-md font-bold">AdityaSV</span>
                <span>
                  <FontAwesomeIcon
                    className="text-xs bg-green-500 text-white rounded-full p-[2px]"
                    icon={faCheck}
                  />
                </span>
              </h2>
              <FontAwesomeIcon className="" icon={faArrowUp} />
              <p>100</p>
            </div>
            <p className="mt-3">
              <span className="text-md font-bold">Q: </span>
              Do you wanna meet up in the Canton area? I stay here too with a
              535xi E61 that I won off of C&amp;B too! Hope that’s okay?
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex bg-slate-300 border-1 rounded-2xl px-2 gap-1">
                <p>18</p>
                <FontAwesomeIcon className="" icon={faArrowUp} />
              </div>
              <button className="text-secondary" type="button">
                View answer
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mx-2">
          <div className="items-center px-10 py-5">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                className=" text-xl bg-gray-300 rounded-full p-2"
                icon={faUser}
              />
              <h2 className="flex items-center">
                <span className="text-md font-bold">AdityaSV</span>
                <span>
                  <FontAwesomeIcon
                    className="text-xs bg-green-500 text-white rounded-full p-[2px]"
                    icon={faCheck}
                  />
                </span>
              </h2>
              <FontAwesomeIcon className="" icon={faArrowUp} />
              <p>100</p>
            </div>
            <p className="mt-3">
              <span className="text-md font-bold">Q: </span>
              Do you wanna meet up in the Canton area? I stay here too with a
              535xi E61 that I won off of C&amp;B too! Hope that’s okay?
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex bg-slate-300 border-1 rounded-2xl px-2 gap-1">
                <p>18</p>
                <FontAwesomeIcon className="" icon={faArrowUp} />
              </div>
              <button className="text-secondary" type="button">
                View answer
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mx-2 py-24">
          <div className="flex items-center justify-center ">
            <button className="text-secondary " type="button">
              Ask a question
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default SellerCarousel;
