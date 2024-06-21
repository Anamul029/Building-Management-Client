import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseBooking from "../Hooks/UseBooking";
import Swal from "sweetalert2";
// import UseAxiosSecure from "../Hooks/UseAxiosSecure";


const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [Price, setPrice] = useState('')
    const [transectionId, setTransectionId] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = UseAxiosSecure();
    const { user } = useContext(AuthContext)
    useEffect(() => {
        axiosSecure.get(`/booking/${user?.email}`)
            .then(res => {
                let value = res.data.rent.substring(1);
                console.log(value)
                setPrice(value)
            })
    }, [axiosSecure, user])


    useEffect(() => {
        if (Price > 0) {
            axiosSecure.post('/create-payment-intent', { price: Price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [axiosSecure, Price])
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // //   if card ===null then its return
        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transection id', paymentIntent.id)
                setTransectionId(paymentIntent.id);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Payment Completed",
                    showConfirmButton: false,
                    timer: 1500
                });
                // now save the payment info in the database
                const Payment={
                    email:user?.email,
                    price:Price,
                    date:new Date(), //utc date convert.use moment js to
                    transectionId:paymentIntent.id,
                }
                const res=await axiosSecure.post('/payments',Payment)
                console.log(res.data)
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
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
            <button className="btn ml-6 btn-primary my-3" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transectionId && <p className="text-green-600 ">Your transaction id is:{transectionId}</p>}
        </form>

    );
}

export default CheckOutForm;