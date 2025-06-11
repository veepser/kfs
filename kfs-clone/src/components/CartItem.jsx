import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="item-info">
        <h3>{item.name}</h3>
        <p>{item.price} ₽ × {item.quantity}</p>
      </div>
      <div className="item-actions">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.id, +e.target.value)}
        />
        <button onClick={() => onRemove(item.id)}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default CartItem;