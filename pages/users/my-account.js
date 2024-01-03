import Image from 'next/image';
import Link from 'next/link';

import {
  faArrowTrendDown,
  faArrowTrendUp,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSession } from 'next-auth/react';


import UsersNav from '../../components/Dashboard/UsersNav';
import Layout from '../../components/Layout';
import useUser from '../../hooks/useUser';
import useUserById from '../../hooks/useUserById';

export default function MyAccount() {
  const { data: session } = useSession();
  const users = useUser();
  const user = useUserById();
  const file = user?.file;
  console.log(file);

  return (
    <Layout title="Profile">
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <UsersNav></UsersNav>
        <div className="xl:col-span-5 md:col-span-2">
          <div className="flex justify-between items-center lg:mx-12 my-10 ">
            <h2 className="text-2xl font-bold pb-6 uppercase text-secondary">
              My Account
            </h2>

            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {file?.map((image) => (
                  <>
                    <Image
                      className=" w-fit h-auto"
                      src={image.fileUrl}
                      alt={image.name}
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-5 py-10">
            <div className="card bg-base-100 shadow-xl">
              <div className="flex">
                <div className="card-body items-center text-center">
                  <h2 className="">Total Bids</h2>
                  <p className="font-bold	text-2xl">
                    
                  </p>
                </div>
                <div className="card-body  text-center">
                  <div className="flex flex-col justify-center items-end">
                    <span>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </span>
                    <h2 className="card-title text-green-500">
                      <FontAwesomeIcon icon={faArrowTrendUp} /> 36.7%
                    </h2>
                    <p>
                      <small>Compared to November 22</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="flex">
                <div className="card-body items-center text-center">
                  <h2 className="">Total Bids Shop</h2>
                  {users
                    .filter((user) => user.email === session.user.email)
                    .map((user) => (
                      <>
                        <h2 className="font-bold	text-2xl">{user.bidNumber}</h2>
                      </>
                    ))}
                </div>
                <div className="card-body  text-center">
                  <div className="flex flex-col justify-center items-end">
                    <span>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </span>
                    <h2 className="card-title text-red-500">
                      <FontAwesomeIcon icon={faArrowTrendDown} /> 7.7%
                    </h2>
                    <p>
                      <small>Compared to November 22</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="flex">
                <div className="card-body items-center text-center">
                  <h2 className="">Total Win</h2>
                  <p className="font-bold	text-2xl">10</p>
                </div>
                <div className="card-body  text-center">
                  <div className="flex flex-col justify-center items-end">
                    <span>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </span>
                    <h2 className="card-title text-green-500">
                      <FontAwesomeIcon icon={faArrowTrendUp} /> 34.7%
                    </h2>
                    <p>
                      <small>Compared to November 22</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between">
                <div>
                  <p>{session.user.name}</p>
                </div>
                <div></div>
              </div>
              <div className="card-actions justify-end">
                <Link href={'/users/profile'}>
                  <a className="btn btn-primary">Edit Profile</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

MyAccount.auth = true;
