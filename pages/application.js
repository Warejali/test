import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';

const img_hosting_token = "100d68a470e46ca6b971169172b3b2a5"

export default function ApplicationScreen() {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  
  const submitHandler = async (data) => {

    const formData = new FormData()
    formData.append("image", data.image[0])

    fetch(image_hosting_url, {
      method: "POST",
      body: formData
    }).then(res => res.json()).then(imageResponse => {
      if (imageResponse.success) {
        const imageUrl = imageResponse.data.display_url;
        console.log(imageUrl);
        axios.post('/api/application', {
          passport:data.passport,
          image: imageUrl,  
          name:data.name, 
          father:data.father, 
          mother:data.mother, 
          address:data.address, 
          phone:data.phone, 
          email:data.email, 
          marriedStatus:data.marriedStatus, 
          nid:data.nid, 
          postoffice:data.postoffice, 
          subdistrict:data.subdistrict, 
          district:data.district
        });
        
        toast.success('Application submitted successfully');
      }
    })

    


    
      // await axios.post('/api/application', {
      //   name, father, mother, address, phone, email, marriedStatus, nid, passport, postoffice, subdistrict, district
      // });

      // toast.success('Appication submitted successfully');
      router.push('/payments');
    
  };
  return (
    <Layout title="Application">
      <div className='lg:py-10 px-3 border bg-slate-100 max-w-screen-lg mx-auto rounded-lg shadow-amber-900'>
        <form
          className="mx-auto max-w-screen-md "
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="my-4 text-xl font-bold">Visa Application</h1>
          <div className='lg:flex lg:gap-5'>
            <div className="mb-4">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="w-full border-1 drop-shadow-md"
                id="name"
                autoFocus
                {...register('name', {
                  required: 'Please enter Your name',
                })}
              />
              {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
            </div>
            <div className="card w-96 bg-base-100 shadow-xl p-4">
              <div className="mb-4">
                <label htmlFor="image">Upload File</label>
                <input
                  type="file"
                  className="w-full border-1 drop-shadow-md"
                  id="image"
                  autoFocus
                  {...register('image', {
                    required: 'Please upload image',
                  })}
                />
                {errors.image && (
                  <div className="text-red-500">{errors.image.message}</div>
                )}
              </div>
            </div>

          </div>
          <div className='lg:flex lg:gap-5'>
            <div className="mb-4">
              <label htmlFor="father">Father Nmae</label>
              <input
                type="text"
                className="w-full border-1 drop-shadow-md"
                id="father"
                autoFocus
                {...register('father', {
                  required: 'Please enter your father',
                })}
              />
              {errors.father && (
                <div className="text-red-500">{errors.father.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="mother">Mother Name</label>
              <input
                type="text"
                className="w-full border-1 drop-shadow-md"
                id="mother"
                autoFocus
                {...register('mother', {
                  required: 'Please enter your mother',
                })}
              />
              {errors.mother && (
                <div className="text-red-500">{errors.mother.message}</div>
              )}
            </div>
          </div>
          <div className='lg:flex lg:gap-5'>
            <div className="mb-4">
              <label htmlFor="subdistrict">Subdistrict</label>
              <input
                type="text"
                className="w-full border-1 drop-shadow-md"
                id="subdistrict"
                autoFocus
                {...register('subdistrict', {
                  required: 'Please enter Subdistrict',
                })}
              />
              {errors.subdistrict && (
                <div className="text-red-500">{errors.subdistrict.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="district">District</label>
              <input
                type="text"
                className="w-full border-1 drop-shadow-md"
                id="district"
                autoFocus
                {...register('district', {
                  required: 'Please enter district',
                })}
              />
              {errors.district && (
                <div className="text-red-500">{errors.district.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="postoffice">Post Office</label>
              <input
                type="text"
                className="w-full border-1 drop-shadow-md"
                id="postoffice"
                autoFocus
                {...register('postoffice', {
                  required: 'Please enter postoffice',
                })}
              />
              {errors.postoffice && (
                <div className="text-red-500">{errors.postoffice.message}</div>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="address">Village/City</label>
            <textarea
              type="text"
              className="w-full border-1 drop-shadow-md"
              id="address"
              autoFocus
              {...register('address', {
                required: 'Please enter address',
              })}
            />
            {errors.address && (
              <div className="text-red-500">{errors.address.message}</div>
            )}
          </div >
          <div className='lg:flex lg:gap-5'>
            <div className="mb-4">
              <label htmlFor="phone">Phone No</label>
              <input
                type="number"
                className="w-full border-1 drop-shadow-md"
                id="phone"
                autoFocus
                {...register('phone', {
                  required: 'Please enter phone Number',
                })}
              />
              {errors.phone && (
                <div className="text-red-500">{errors.phone.message}</div>
              )}
            </div>


            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Please enter email',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: 'Please enter valid email',
                  },
                })}
                className="w-full border-1 drop-shadow-md"
                id="email"
              ></input>
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="marriedStatus">Married Status</label>
              <select id="marriedStatus"
                autoFocus
                {...register('marriedStatus', {
                  required: 'Please enter marriedStatus',
                })} className="w-full border-1 drop-shadow-md">
                <option disabled selected>Please choose one</option>
                <option value="merit">Married</option>
                <option value="unmerit">Unmarried</option>
              </select>
              {errors.marriedStatus && (
                <div className="text-red-500">{errors.marriedStatus.message}</div>
              )}
            </div>
          </div>


          <div className='flex gap-5'>
            <div className="mb-4">
              <label htmlFor="nid">NID No</label>
              <input
                type="number"
                className="w-full border-1 drop-shadow-md"
                id="nid"
                autoFocus
                {...register('nid', {
                  required: 'Please enter NID number',
                })}
              />
              {errors.nid && (
                <div className="text-red-500">{errors.nid.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="passport">Passport No</label>
              <input
                type="text"
                className="w-full border-1 drop-shadow-md"
                id="passport"
                autoFocus
                {...register('passport', {
                  required: 'Please enter passport number',
                })}
              />
              {errors.passport && (
                <div className="text-red-500">{errors.passport.message}</div>
              )}
            </div>
          </div>

          <div className="mb-4 ">
            <button className="primary-button font-bold text-white">Submit</button>
          </div>

        </form>
      </div>
    </Layout>
  );
}
