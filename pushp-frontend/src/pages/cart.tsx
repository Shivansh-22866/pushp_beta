import { useEffect, useState } from 'react'
import { VscError } from 'react-icons/vsc';
import CartItem from '../components/cart-item';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = [

    {
      id: 1,
      photo: 'https://m.media-amazon.com/images/I/6128S+OCfGL._SY355_.jpg',
      name: 'Product 1',
      price: 3000,
      quantity: 2,
    },

    {
      id: 2,
      photo: 'https://m.media-amazon.com/images/I/6128S+OCfGL._SY355_.jpg',
      name: 'Product 2',
      price: 5000,
      quantity: 1,
    },

    {
      id: 3,
      photo: 'https://m.media-amazon.com/images/I/6128S+OCfGL._SY355_.jpg',
      name: 'Product 3',
      price: 2500,
      quantity: 3,
    }

  ];
  const subtotal = 4000;
  const tax = Math.round(subtotal * 0.18);
  const shippingCharges = 200;
  const total = subtotal + tax + shippingCharges;
  const discount = 400

  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setisValidCouponCode] = useState<boolean>(false);

  useEffect(() => {

    const id = setTimeout(() => {
      if(Math.random() > 0.5) {
        setisValidCouponCode(true);
      }
      else {
        setisValidCouponCode(false);
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    }
  }, [couponCode])

  return (
    <div className='cart'>
      <main>

      {
        cartItems.length > 0 ? (
          cartItems.map((i, idx)=> <CartItem cartItem={i} key={idx} />)
        ) : (
          <p>Your cart is empty.</p>
        )
      }

      </main>
      <aside>
        <p>Subtotal: Rs{subtotal}</p>
        <p>Shipping charges: Rs{shippingCharges}</p>
        <p>Tax: Rs{tax}</p>
        <p>Discount - <em>Rs {discount}</em></p>
        <p><b>Total: Rs{total}</b></p>

        <input type="text" placeholder='Coupon Code' value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />

        {
          couponCode && (
            isValidCouponCode ? <span className='green'>
            Rs {discount} off using the <code>{couponCode}</code>
          </span> : (
            <span className='red'>Invalid Coupon <VscError/> </span>

          )
          )
        }

        {
          cartItems.length > 0 && <Link to="/shipping">Check Out</Link>
        }
      </aside>
    </div>
  )
}

export default Cart