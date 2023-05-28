import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentFormContainer, FromContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const totalCartValue = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const paymentHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!stripe || !elements) return;

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: totalCartValue * 100,
        username: currentUser
          ? currentUser?.displayName || currentUser?.email || "Guest"
          : "Guest",
      }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Ganesh Jaiwal",
        },
      },
    });

    setIsLoading(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful!");
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FromContainer onSubmit={paymentHandler}>
        <h2>Card Payment</h2>
        <CardElement />
        <Button
          isLoading={isLoading}
          style={{ margin: "20px auto" }}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay
        </Button>
      </FromContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
