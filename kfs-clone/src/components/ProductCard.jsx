const ProductCard = ({ product, onAddToCart, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} ₽</p>
      <button onClick={(e) => {
        e.stopPropagation()
        onAddToCart()
      }}>
        В корзину
      </button>
    </div>
  )
}

export default ProductCard