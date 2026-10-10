import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementQuantity, incrementQuantity, removeItem, selectCartCount, selectCartItems, selectCartTotal } from './CartSlice';
const dollars = (value) => `$${value.toFixed(2)}`;

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState('');
  return (
    <main className="container cart-page">
      <div className="page-heading"><p className="eyebrow">Your little greenhouse</p><h1>Shopping Cart</h1><p>{count} {count === 1 ? 'plant' : 'plants'} in your cart</p></div>
      {items.length === 0 ? (
        <div className="empty-cart"><h2>Your cart is waiting to bloom.</h2><p>Pick out a plant to get started.</p><Link to="/plants" className="button button-primary">Continue Shopping</Link></div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} onError={(event) => { event.currentTarget.src = '/images/plant-placeholder.svg'; }} />
                <div className="cart-item-info"><h2>{item.name}</h2><p>Unit price: {dollars(item.price)}</p><button type="button" className="remove-button" onClick={() => dispatch(removeItem(item.id))}>Delete</button></div>
                <div className="cart-item-controls">
                  <div className="quantity-control" aria-label={`Quantity controls for ${item.name}`}>
                    <button type="button" aria-label={`Decrease quantity of ${item.name}`} onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
                    <output aria-label={`${item.name} quantity`}>{item.quantity}</output>
                    <button type="button" aria-label={`Increase quantity of ${item.name}`} onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                  </div>
                  <strong className="line-total">{dollars(item.price * item.quantity)}</strong>
                </div>
              </article>
            ))}
          </section>
          <aside className="cart-summary"><h2>Order Summary</h2><div className="summary-line"><span>Total items</span><strong>{count}</strong></div><div className="summary-line total"><span>Total cart amount</span><strong>{dollars(total)}</strong></div><button type="button" className="button button-primary checkout-button" onClick={() => setCheckoutMessage('Coming Soon! Checkout will be available in a future update.')}>Checkout</button>{checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}<Link to="/plants" className="button button-outline">Continue Shopping</Link></aside>
        </div>
      )}
    </main>
  );
}
