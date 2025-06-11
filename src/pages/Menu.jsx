import { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Товары дня');
  
  const menuData = {
    'Товары дня': [
      { id: 1, name: 'Бургер День-Ночь', price: 199, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300' },
      { id: 2, name: 'Картофель Фри', price: 99, image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300' }
    ],
    'Бургеры': [
      { id: 3, name: 'Чизбургер', price: 149, image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=300' },
      { id: 4, name: 'Чикенбургер', price: 129, image: 'https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?q=80&w=300' }
    ],
    'Напитки': [
      { id: 5, name: 'Кола', price: 79, image: 'https://images.unsplash.com/photo-1562952546-12992a813a51?q=80&w=300' },
      { id: 6, name: 'Апельсиновый сок', price: 89, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=300' }
    ]
  };

  return (
    <div className="menu-page">
      {/* Горизонтальное меню категорий*/}
      <div className="categories">
        {Object.keys(menuData).map(category => (
          <button
            key={category}
            className={`category-btn ${
              activeCategory === category ? 'active' : 'inactive'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Товары активной категории */}
      <div className="products-grid">
        {menuData[activeCategory].map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price} ₽</p>
            <button className="add-to-cart-btn">В корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;