import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/menu">Меню</Link>
        </li>
        <li>
          <Link to="/coupons">Купоны</Link>
        </li>
        <li>
          <Link to="/promotions">Акции</Link>
        </li>
        <li>
          <Link to="/cart">Корзина</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;