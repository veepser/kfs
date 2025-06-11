import { useState } from 'react'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [productsOfTheDay] = useState([
    { id: 1, name: 'Бургер День-Ночь', price: 199, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300' },
    { id: 2, name: 'Картофель Фри', price: 99, image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300' },
    { id: 3, name: 'Кола', price: 79, image: 'https://images.unsplash.com/photo-1562952546-12992a813a51?q=80&w=300' },
  ])

  return (
    <div className="home">
      <Banner 
        title="Специальное предложение!" 
        subtitle="Попробуйте наш новый бургер" 
        image="/banner.jpg" 
      />
      
      <h2>Товары дня</h2>
      <div className="products-grid">
        {productsOfTheDay.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={() => console.log('Added to cart', product.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home