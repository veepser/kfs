const CouponCard = ({ coupon, onCopy }) => {
  return (
    <div className="coupon-card">
      <h3>{coupon.code}</h3>
      <p>{coupon.description}</p>
      <p>Действует до: {coupon.validUntil}</p>
      <button onClick={onCopy}>Скопировать</button>
    </div>
  )
}

export default CouponCard