import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Order.css"
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format('MMM Do YYYY, h:mma')}</p>
        <p className='order_id'>
            <small>{order.id}</small>
        </p>
        {order.data.basket?.map(item => (
            <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton
            />
        ))}

        <CurrencyFormat
            renderText={(value) => (
                <h3 className="order__total">Order Total: {value}</h3>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
    </div>
  )
}

export default Order