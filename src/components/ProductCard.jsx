import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import LampSvg from './LampSvg';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`} className={styles.imgWrap}>
        <LampSvg kelvin={product.kelvin} />
      </Link>
      <div className={styles.info}>
        <Link to={`/product/${product.id}`} className={styles.name}>{product.name}</Link>
        <span className={styles.base}>Цоколь: {product.base}</span>
        <span className={styles.brand}>«{product.brand}»</span>
        <div className={styles.footer}>
          <span className={styles.price}>{product.price.toFixed(2)} руб.</span>
          <button className={styles.btn} onClick={() => addToCart(product)}>В корзину</button>
        </div>
      </div>
    </div>
  );
}
