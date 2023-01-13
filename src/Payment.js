import React, { useEffect, useState} from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import { Link, useNavigate} from 'react-router-dom';
import { CardElement ,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { setIndexConfiguration } from '@firebase/firestore';
import axios from "./axios";
import { db } from './firebase';

function Payment() {
  const [{basket, user},dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer

    const getClientSecret = async() => {
        const response = await axios({
            method: 'post',
            // Stripe expects the total in a currencies subunits that means it is expecting the dollar in cents
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  },[basket])

  console.log('The Secret is >> ',clientSecret)

  const handleSubmit = async (event) => {
    //something
    event.preventDefault(); // stops the refreshing
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentIntent }) => {
        // paymentIntent = paymentConfirmation

        db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
            basket: basket, //the basket of the order
            amount: paymentIntent.amount, //amount of money spent on that order
            created: paymentIntent.created //time stamp of when the order was created
        }) //goes inside DB, inside the users document using the user id and collects the orders using the paymentIntent id
        // to set the value of the basket, amount and time stamp to show in the '/orders' page

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
            type: 'EMPTY_BASKET'
        })

        navigate('/orders',{replace:true});
    })
  }

  const handleChange = event => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types in their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "")
  }
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
            {/*Payment section - delivery address */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Hamilton, ON, Canada</p>
                </div>

            </div>

            {/*Payment section - review items */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
                
            </div>

            {/*Payment section - payment method */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className='payments__priceContainer'>
                             <CurrencyFormat
                                renderText={(value) => (
                                <h4>Order Total : {value}</h4>
                                )}
                                decimalScale={2}
                                value = {getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={'$'}
                             />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {/*ERRORS */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment