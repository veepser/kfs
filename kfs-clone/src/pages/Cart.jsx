import { useState } from 'react'
import CartItem from '../components/CartItem'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Бургер День-Ночь', price: 199, quantity: 2 },
    { id: 2, name: 'Кола', price: 79, quantity: 1 },
  ])
  
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [orderNumber, setOrderNumber] = useState(null)
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    name: '',
    expiry: '',
    cvv: ''
  })

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const finalTotal = total - discount

  const applyCoupon = () => {
    if (couponCode === 'SCIDKA10') {
      setDiscount(total * 0.9)
    } else if (couponCode === 'SCIDKA20') {
      setDiscount(total * 0.8)
    }
  }

  const handlePayment = (e) => {
    e.preventDefault()
    // В реальном приложении здесь была бы интеграция с платежной системой
    const randomOrderNumber = Math.floor(Math.random() * 1000000)
    setOrderNumber(randomOrderNumber)
  }

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ))
  }

  return (
    <div className="cart">
      <h1>Корзина</h1>
      
      {orderNumber ? (
        <div className="order-success">
          <h2>Заказ оформлен!</h2>
          <p>Номер вашего заказа: <strong>{orderNumber}</strong></p>
          <p>Назовите этот номер на кассе для получения заказа.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem 
                key={item.id}
                item={item}
                onUpdateQuantity={(newQty) => updateQuantity(item.id, newQty)}
                onRemove={() => setCartItems(cartItems.filter(i => i.id !== item.id))}
              />
            ))}
          </div>

          <div className="coupon-section">
            <input 
              type="text" 
              placeholder="Введите купон" 
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button onClick={applyCoupon}>Применить купон</button>
            {discount > 0 && <p>Скидка: {discount} ₽</p>}
          </div>

          <div className="totals">
            <p>Итого: {finalTotal} ₽</p>
          </div>

          <form className="payment-form" onSubmit={handlePayment}>
            <h2>Оплата</h2>
            <input 
              type="text" 
              placeholder="Номер карты" 
              value={paymentInfo.cardNumber}
              onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
              required
            />
            <input 
              type="text" 
              placeholder="Имя на карте" 
              value={paymentInfo.name}
              onChange={(e) => setPaymentInfo({...paymentInfo, name: e.target.value})}
              required
            />
            <div className="card-details">
              <input 
                type="text" 
                placeholder="MM/YY" 
                value={paymentInfo.expiry}
                onChange={(e) => setPaymentInfo({...paymentInfo, expiry: e.target.value})}
                required
              />
              <input 
                type="text" 
                placeholder="CVV" 
                value={paymentInfo.cvv}
                onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
                required
              />
            </div>
            <button type="submit">Оплатить</button>
          </form>
        </>
      )}
    </div>
  )
}

export default Cart