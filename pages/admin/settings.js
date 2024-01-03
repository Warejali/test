import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';
import AdminLayout from '../../components/AdminLayout';
import AdminTopNav from '../../components/Dashboard/AdminTopNav';
import AdminNavBar from '../../components/Dashboard/AdminNavBar';
import { getError } from '../../utils/error';
import { DropzoneComponent } from '../../components/DropzoneComponent';

export default function Settings() {
  const { data: session } = useSession();

  const {
    handleSubmit,
    register,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue('name', session.user.name);
    setValue('email', session.user.email);
  }, [session.user, setValue]);

  const submitHandler = async ({ name, email, password, file }) => {
    let bidNumber = 0;
    if (file) {
      if (Array.isArray(file)) {
        const formData = new FormData();
        file.forEach((f) => {
          formData.append('file', f);
        });

        const { data } = await axios.post('/api/upload', formData);
        file = data.fileData;
      }
    }
    try {
      await axios.put('/api/auth/update', {
        name,
        email,
        password,
        file,
        bidNumber,
      });
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      toast.success('Profile updated successfully');
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <AdminLayout title="Profile">
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <AdminNavBar></AdminNavBar>
        <div className="xl:col-span-5 md:col-span-2">
          <AdminTopNav></AdminTopNav>
          <div className="flex items-center justify-between">
            <h1 className="my-4 text-xl font-semibold text-secondary">
              Update Account
            </h1>
          </div>
          <form
            className="mx-auto max-w-screen-md"
            onSubmit={handleSubmit(submitHandler)}
          >
            <h1 className="mb-4 text-xl">Update Profile</h1>

            <div className="mb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="w-full"
                id="name"
                autoFocus
                {...register('name', {
                  required: 'Please enter name',
                })}
              />
              {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="w-full"
                id="email"
                {...register('email', {
                  required: 'Please enter email',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: 'Please enter valid email',
                  },
                })}
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <input
                className="w-full"
                type="password"
                id="password"
                {...register('password', {
                  minLength: {
                    value: 6,
                    message: 'password is more than 5 chars',
                  },
                })}
              />
              {errors.password && (
                <div className="text-red-500 ">{errors.password.message}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="w-full"
                type="password"
                id="confirmPassword"
                {...register('confirmPassword', {
                  validate: (value) => value === getValues('password'),
                  minLength: {
                    value: 6,
                    message: 'confirm password is more than 5 chars',
                  },
                })}
              />
              {errors.confirmPassword && (
                <div className="text-red-500 ">
                  {errors.confirmPassword.message}
                </div>
              )}
              {errors.confirmPassword &&
                errors.confirmPassword.type === 'validate' && (
                  <div className="text-red-500 ">Password do not match</div>
                )}
            </div>

            {/* Images Gallery part */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className=" font-bold">Profile Pictures</h2>
                {/* <DropzoneComponent></DropzoneComponent> */}
                <Controller
                  control={control}
                  defaultValue={''}
                  name="file"
                  render={({ field: { onChange, value, name, ref } }) => (
                    <DropzoneComponent
                      onChange={onChange}
                      value={value}
                      name={name}
                      setValue={setValue}
                      ref={ref}
                    />
                  )}
                />
              </div>
            </div>
            <div className="mb-4">
              <button className="primary-button">Update Profile</button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

Settings.auth = { adminOnly: true };
