import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Order.module.css';

function genOrderId() {
  return Date.now().toString() + Math.random().toString(36).slice(2, 10).toUpperCase();
}

export default function Order() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', address: '' });
  const [errors, setErrors] = useState({});

  const orderId = useState(genOrderId)[0];

  if (items.length === 0) return (
    <div className={styles.empty}>
      <p>Корзина пуста. Нельзя оформить заказ.</p>
      <Link to="/catalog" className={styles.goBtn}>В каталог</Link>
    </div>
  );

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Введите ФИО';
    if (!form.phone.trim())    e.phone    = 'Введите телефон';
    if (!form.email.trim())    e.email    = 'Введите email';
    if (!form.address.trim())  e.address  = 'Введите адрес доставки';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    clearCart();
    navigate('/confirmation', { state: { orderId, total, form } });
  };

  const handleChange = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/cart" className={styles.back}>← Вернуться в корзину</Link>

        <div className={styles.card}>
          {/* Слева — сводка */}
          <div className={styles.summary}>
            <h2 className={styles.orderNum}>Заказ № {orderId}</h2>
            <p className={styles.totalLabel}>На общую сумму:</p>
            <p className={styles.totalAmount}>{total.toFixed(2)} руб.</p>

            <div className={styles.itemsList}>
              {items.map(item => (
                <div key={item.id} className={styles.summaryItem}>
                  <span>{item.name}</span>
                  <span className={styles.summaryQty}>{item.qty} шт. × {item.price} руб.</span>
                </div>
              ))}
            </div>
          </div>

          {/* Справа — форма */}
          <div className={styles.form}>
            <div className={styles.field}>
              <label>Фамилия Имя Отчество</label>
              <input
                type="text" placeholder="Иванов Иван Иванович"
                value={form.fullName}
                onChange={e => handleChange('fullName', e.target.value)}
                className={errors.fullName ? styles.inputErr : ''}
              />
              {errors.fullName && <span className={styles.err}>{errors.fullName}</span>}
            </div>

            <div className={styles.field}>
              <label>Номер телефона</label>
              <input
                type="tel" placeholder="+7 (999) 000-00-00"
                value={form.phone}
                onChange={e => handleChange('phone', e.target.value)}
                className={errors.phone ? styles.inputErr : ''}
              />
              {errors.phone && <span className={styles.err}>{errors.phone}</span>}
            </div>

            <div className={styles.field}>
              <label>Email</label>
              <input
                type="email" placeholder="mail@example.com"
                value={form.email}
                onChange={e => handleChange('email', e.target.value)}
                className={errors.email ? styles.inputErr : ''}
              />
              {errors.email && <span className={styles.err}>{errors.email}</span>}
            </div>

            <div className={styles.field}>
              <label>Адрес доставки</label>
              <input
                type="text" placeholder="Москва, ул. Примерная, д. 1, кв. 1"
                value={form.address}
                onChange={e => handleChange('address', e.target.value)}
                className={errors.address ? styles.inputErr : ''}
              />
              {errors.address && <span className={styles.err}>{errors.address}</span>}
            </div>

            <button className={styles.submitBtn} onClick={handleSubmit}>
              Подтвердить заказ →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
