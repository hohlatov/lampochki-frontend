import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import LampSvg from '../components/LampSvg';
import styles from './ProductDetail.module.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return (
    <div className={styles.notFound}>
      <p>Товар не найден</p>
      <Link to="/catalog">← Вернуться в каталог</Link>
    </div>
  );

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/catalog" className={styles.back}>← Вернуться в каталог</Link>

        <div className={styles.card}>
          <div className={styles.imgWrap}>
            <LampSvg kelvin={product.kelvin} size={160} />
          </div>
          <div className={styles.info}>
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.base}>Цоколь: <strong>{product.base}</strong></p>

            <div className={styles.specs}>
              <h3>Технические характеристики:</h3>
              <ul>
                <li>{product.color}</li>
                <li>Яркость: {product.kelvin}К</li>
                <li>Мощность: {product.wattage} Вт</li>
                <li>Срок службы: {product.life} лет</li>
              </ul>
            </div>

            <div className={styles.manufacturer}>
              <p>Завод изготовитель:</p>
              <p className={styles.brand}>«{product.brand}»</p>
            </div>

            <div className={styles.priceRow}>
              <span className={styles.priceLabel}>Цена:</span>
              <span className={styles.price}>{product.price.toFixed(2)} руб.</span>
            </div>

            <button
              className={`${styles.addBtn} ${added ? styles.added : ''}`}
              onClick={handleAdd}
            >
              {added ? '✓ Добавлено!' : 'Добавить в корзину'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
