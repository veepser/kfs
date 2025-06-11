import CouponCard from '../components/CouponCard'

const Coupons = () => {
  const coupons = [
    { id: 1, code: 'SCIDKA10', description: 'Скидка 10%', validUntil: '31.06.2025' },
    { id: 2, code: 'SCIDKA20', description: 'Скидка 20%', validUntil: '15.06.2025' },
  ]

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code)
    alert('Купон скопирован!')
  }

  return (
    <div className="coupons">
      <h1>Действующие купоны</h1>
      <div className="coupons-list">
        {coupons.map(coupon => (
          <CouponCard 
            key={coupon.id}
            coupon={coupon}
            onCopy={() => copyToClipboard(coupon.code)}
          />
        ))}
      </div>
    </div>
  )
}

export default Coupons