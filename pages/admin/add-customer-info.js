import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import AdminLayout from '../../components/AdminLayout';
import AdminNavBar from '../../components/Dashboard/AdminNavBar';
import AdminTopNav from '../../components/Dashboard/AdminTopNav';

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
  const formData = new FormData();
  formData.append("image", data.image[0]);

  try {
    const imageResponse = await axios.post(image_hosting_url, formData);

    if (imageResponse.data.success) {
      const imageUrl = imageResponse.data.data.display_url;

      await axios.post('/api/customer', {
        passport: data.passport,
        image: imageUrl
      });

      toast.success('Application submitted successfully');
      router.push('/admin/customers');
    } else {
      toast.error('Image upload failed');
    }
  } catch (error) {
    console.error('Error:', error);
    toast.error('Something went wrong');
  }
};



  return (

    <AdminLayout title="Profile">
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <AdminNavBar></AdminNavBar>
        <div className="xl:col-span-5 md:col-span-2">
          <AdminTopNav></AdminTopNav>
          <div className="flex items-center justify-between">

            <div className='lg:py-10 px-3 border bg-slate-100 max-w-screen-lg mx-auto rounded-lg shadow-amber-900'>
              <form
                className="mx-auto max-w-screen-md "
                onSubmit={handleSubmit(submitHandler)}
              >

                <div className='lg:flex lg:gap-5'>

                  {/* Images Gallery part */}
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
                    <div className="mb-4">
                      <label htmlFor="image2">Upload File 02</label>
                      <input
                        type="file"
                        className="w-full border-1 drop-shadow-md"
                        id="image2"
                        autoFocus
                        
                        // {...register('image2', {
                        //   required: 'Please upload image 02',
                        // })}
                      />
                      {errors.image2 && (
                        <div className="text-red-500">{errors.image2.message}</div>
                      )}
                    </div>
                  </div>

                </div>

                <div className='flex gap-5'>

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
                  <button className="primary-button font-bold text-white">Upload Info</button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>

  );
}
