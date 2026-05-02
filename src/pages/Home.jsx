import { Link } from 'react-router-dom';
import { products, promotions } from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from './Home.module.css';

export default function Home() {
  const popular = products.filter(p => p.popular);

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <Link to="/catalog" className={styles.heroBtn}>Смотреть каталог</Link>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.logoMark}>💡</div>
            <p className={styles.heroSubtitle}>Интернет-магазин завода по производству лампочек</p>
          </div>
        </div>
      </section>

      {/* Популярные товары */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Популярные товары</h2>
          <div className={styles.grid}>
            {popular.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Акции */}
      <section className={styles.section} id="promo">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Акции</h2>
          <div className={styles.promoList}>
            {promotions.map(promo => (
              <div key={promo.id} className={styles.promoCard}>
                <span className={styles.promoTag}>🏷️ {promo.title}</span>
                <p>{promo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className={styles.section} id="contacts">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Контакты</h2>
          <div className={styles.contacts}>
            <p>📞 +7 (495) 000-00-00</p>
            <p>📧 info@lampozavod.ru</p>
            <p>📍 Москва, ул. Световая, д. 1</p>
          </div>
        </div>
      </section>
    </div>
  );
}
