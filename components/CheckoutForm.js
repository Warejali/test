import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';

const CheckoutForm = ({ price, user, totalBid }) => {
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/api/keys/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('[error]', error);
      setCardError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setCardError('');
    }
    setSuccess('');
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: 'Jenny Rosen',
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === 'succeeded') {
      setSuccess('Congrats, The Payment has been success. ');
      setTransactionId(paymentIntent.id);
      setProcessing(false);
      try {
        await axios.put('/api/auth/update', {
          bidNumber: totalBid,
          email: user.email,
          name: user.name,
        });

        toast.success('Bids Connect added successfully');
      } catch (err) {
        toast.error(getError(err));
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                border: '2px solid red',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className=" flex justify-end pt-10">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-700 font-bold">{success}</p>
          <p className="text-green-700 font-bold">
            You Transaction Id is{transactionId}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
