import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

export default function Header() {
  const nav = useNavigate();
  const cartItems = useSelector(state => state.cart.items)

  const totalCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <header className={styles.wrap}>
      <div className={styles.topBar}>
        <span>📍 Ваш город: Москва</span>
      </div>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>💡</span>
          <span className={styles.logoText}>ЛампоЗавод</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/catalog">Каталог</Link>
          <Link to="/#promo">Акции</Link>
          <Link to="/#reviews">Отзывы</Link>
          <Link to="/#contacts">Контакты</Link>
          <Link to="/cart" className={styles.cartLink}>
            Корзина {totalCount > 0 && <span className={styles.badge}>{count}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
