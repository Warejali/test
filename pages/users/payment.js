import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../../components/CheckoutForm';
import UsersNav from '../../components/Dashboard/UsersNav';
import Layout from '../../components/Layout';
const stripePromise = loadStripe(
  'pk_test_51L0nKIAoWY7yZrZSU2q2yTbC0iM7MthnRVvIuj6F4pPk8CA8PVt3b6UtjPcSw9wNkl1ymIHuAs0CTomgV7inylLD00y3znsqyq'
);

const Payment = () => {
  return (
    <Layout>
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <UsersNav></UsersNav>
        <div className="xl:col-span-5 md:col-span-2">
          <h1 className="my-4 text-xl font-semibold text-secondary"></h1>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
