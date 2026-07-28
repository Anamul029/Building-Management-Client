import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripePromise=loadStripe(import.meta.env.VITE_STRIPE_KEY)
const Payment = () => {
    return (
        <div>
            <h2 className="Md:text-4xl mb-12 font-semibold text-center">............ Pay Money Here.............</h2>
            <div className="w-4/5 container mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
