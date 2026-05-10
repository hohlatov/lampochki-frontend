import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Catalog.module.css';

const BASES   = ['Все', 'E27', 'E14', 'GU10'];
const BRANDS  = ['Все', 'Ёлки петролиум', 'СветоФарм', 'ЛюксЛайт'];
const KELVIN  = [
  { label: 'Все', value: 'all' },
  { label: 'Тёплый (до 3000К)', value: 'warm' },
  { label: 'Нейтральный (3001–4500К)', value: 'neutral' },
  { label: 'Холодный (от 4501К)', value: 'cold' },
];

export default function Catalog() {
  const [base,     setBase]     = useState('Все');
  const [brand,    setBrand]    = useState('Все');
  const [kelvin,   setKelvin]   = useState('all');
  const [maxPrice, setMaxPrice] = useState(1000);

  const filtered = products.filter(p => {
    if (base  !== 'Все' && p.base  !== base)  return false;
    if (brand !== 'Все' && p.brand !== brand) return false;
    if (p.price > maxPrice) return false;
    if (kelvin === 'warm'    && p.kelvin > 3000) return false;
    if (kelvin === 'neutral' && (p.kelvin <= 3000 || p.kelvin > 4500)) return false;
    if (kelvin === 'cold'    && p.kelvin <= 4500) return false;
    return true;
  });

  return (
    <div className={styles.page}>
      {/* Sidebar фильтры */}
      <aside className={styles.sidebar}>
        <h3 className={styles.filterTitle}>Фильтры</h3>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Цоколь</label>
          {BASES.map(b => (
            <button key={b}
              className={`${styles.chip} ${base === b ? styles.active : ''}`}
              onClick={() => setBase(b)}>{b}</button>
          ))}
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Яркость</label>
          {KELVIN.map(k => (
            <button key={k.value}
              className={`${styles.chip} ${kelvin === k.value ? styles.active : ''}`}
              onClick={() => setKelvin(k.value)}>{k.label}</button>
          ))}
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Фирма</label>
          {BRANDS.map(b => (
            <button key={b}
              className={`${styles.chip} ${brand === b ? styles.active : ''}`}
              onClick={() => setBrand(b)}>{b}</button>
          ))}
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Цена до: {maxPrice} руб.</label>
          <input type="range" min={200} max={1000} step={50}
            value={maxPrice} onChange={e => setMaxPrice(+e.target.value)}
            className={styles.range}/>
        </div>

        <button className={styles.resetBtn} onClick={() => {
          setBase('Все'); setBrand('Все'); setKelvin('all'); setMaxPrice(1000);
        }}>Сбросить</button>
      </aside>

      {/* Список товаров */}
      <main className={styles.main}>
        <div className={styles.topBar}>
          <Link to="/" className={styles.backLink}>← На главную</Link>
          <span className={styles.count}>Найдено: {filtered.length} товаров</span>
        </div>
        {filtered.length === 0
          ? <div className={styles.empty}>Нет товаров по выбранным фильтрам</div>
          : <div className={styles.grid}>
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
        }
      </main>
    </div>
  );
}
