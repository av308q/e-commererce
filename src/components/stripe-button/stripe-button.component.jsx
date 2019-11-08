import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckOutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_2zKYC5Igv3YJmrT77alNICI700rgGdV8DL'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckOut 
    lable='Pay Now'
    name='United'
    billlingAdress
    shippingAdress 
    image='logo_mu.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLable='Pay Now'
    token={onToken}
    stripeKey={publishableKey}

    />
  );
};

export default StripeCheckOutButton;