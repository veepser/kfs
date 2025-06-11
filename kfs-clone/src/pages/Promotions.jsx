import { useState, useEffect } from 'react';

const Promotions = () => {
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      title: "Счастливые часы",
      description: "Скидка 20% на все бургеры с 14:00 до 17:00",
      image: "https://images.unsplash.com/photo-1590299275619-8ab3db954d61?q=80&w=180"
    },
    {
      id: 2,
      title: "Двойная порция",
      description: "Бесплатная добавка картофеля при заказе от 500 рублей",
      image: "https://images.unsplash.com/photo-1661193320014-a6bbee717d09?q=80&w=200"
    }
  ]);

  return (
    <div className="promotions">
      <h1>Акции и специальные предложения</h1>
      
      <div className="promotions-list">
        {promotions.map(promo => (
          <div key={promo.id} className="promotion-card">
            <img src={promo.image} alt={promo.title} />
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;