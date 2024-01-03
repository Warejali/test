import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import logo from '../public/logo.png';
import { getError } from '../utils/error';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTruckMoving } from '@fortawesome/free-solid-svg-icons';

const LoginModal = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <div>
      <input type="checkbox" id="login-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box lg:w-8/12 max-w-3xl">
          <div className="flex justify-between items-center">
            <div>
              <Image src={logo} alt="logo" width={120} height={50} />
            </div>
            <div></div>
            <div className=" font-bold">
              <label htmlFor="login-modal" className="cursor-pointer">
                Close
              </label>
            </div>
          </div>
          <div className="px-5">
            <h2 className="text-center text-2xl font-bold py-4">
            Immigrate through Express Entry
            </h2>
           
              
              <div>
                <form
                  className="mx-auto max-w-screen-md"
                  onSubmit={handleSubmit(submitHandler)}
                >
                  <h1 className="mb-4 text-xl font-bold text-secondary">
                    Login
                  </h1>
                  <div className="mb-6 font-semibold">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Please enter email',
                        pattern: {
                          value:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                          message: 'Please enter valid email',
                        },
                      })}
                      className="w-full"
                      id="email"
                      autoFocus
                    ></input>
                    {errors.email && (
                      <div className="text-red-500">{errors.email.message}</div>
                    )}
                  </div>
                  <div className="mb-6 font-semibold">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      {...register('password', {
                        required: 'Please enter password',
                        minLength: {
                          value: 6,
                          message: 'password is more than 5 chars',
                        },
                      })}
                      className="w-full"
                      id="password"
                      autoFocus
                    ></input>
                    {errors.password && (
                      <div className="text-red-500 ">
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  <div className="modal-action">
                    <button
                      htmlFor="my-modal-5"
                      className="primary-button w-full text-white font-bold"
                    >
                      Next
                    </button>
                  </div>

                  <div className="my-4 text-center font-semibold">
                    Don&apos;t have an account? &nbsp;
                    <Link href={`/register?redirect=${redirect || '/'}`}>
                      <a className=" text-secondary text-lg">Register</a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default LoginModal;
