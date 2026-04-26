'use client';
import { useMemo } from 'react';
import styles from './Styles.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';
import plates from '../../../../assets/plates.svg';
import bag from '../../../../assets/bag.svg';
import show from '../../../../assets/show.svg';
import investing from '../../../../assets/investing.svg';
import arrowButton from '../../../../assets/arrowButton.svg';
import Ai from './Ai';
import useAnimatedChat from './useAnimatedChat';

const cx = classNames.bind(styles);

const Automates = () => {
  const messageQueue = useMemo(
    () => [
      {
        sender: 'send-message',
        text: 'Нужен насос для подвала, глубина 3 метра, до 500 литров воды.',
        id: 1,
      },
      {
        sender: 'bot-message',
        text: 'Добрый день, понял. Для таких объемов подойдет дренажный насос мощностью около 500 Вт с производительностью 8000 л/ч. Какие-то доп. функции нужны?',
        id: 2,
      },
      {
        sender: 'send-message',
        text: 'Желательно автоматический выключатель, когда вода откачана.',
        id: 3,
      },
      {
        sender: 'bot-message',
        text: 'Тогда подойдет WaterMaster 500 с поплавковым выключателем и защитой от сухого хода. Шнур 10 м.',
        id: 4,
      },
      { sender: 'send-message', text: 'Цена?', id: 5 },
      {
        sender: 'bot-message',
        text: '7500 ₽. Рекомендую также шланг 20 м — 1080 ₽ с учётом комплектной скидки. Закажете вместе?',
        id: 6,
      },
      {
        sender: 'send-message',
        text: 'Да. Рассчитайте доставку до Иркутска.',
        id: 7,
      },
      { sender: 'bot-message', text: 'Сейчас уточню, ожидайте.', id: 8 },
      {
        sender: 'bot-message',
        text: 'Доставка до пункта ПЭК в Иркутск — 2700 ₽, срок до 5 дней.',
        id: 9,
      },
    ],
    [],
  );

  const { ref, listRef, messages, input, setInput, handleSubmit, isBotTyping } =
    useAnimatedChat(
      messageQueue,
      'Принято! Формирую заказ и пришлю детали доставки.',
    );

  return (
    <div className={cx('content-wrapper')} ref={ref}>
      <div className={cx('wrapper-form')}>
        <div className={cx('wrapper-form', 'content-form')}>
          <h3 className={cx('title-form')}>Aipie</h3>

          <div className={cx('message-list')} ref={listRef}>
            <div>
              <Ai />
              <p className={cx('text-ai')}>Чем я могу помочь?</p>
            </div>
            {messages.map((msg) => (
              <span key={msg?.id} className={cx(`${msg?.sender}`, 'message')}>
                {msg?.text}
              </span>
            ))}
            {isBotTyping && (
              <span className={cx('typing')} aria-label="Assistant is typing">
                <span /> <span /> <span />
              </span>
            )}
          </div>

          <form className={cx('input-wrapper')} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Сообщение"
              className={cx('input')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Введите сообщение"
            />
            <button
              type="submit"
              className={cx('button-form')}
              aria-label="Отправить"
            >
              <Image
                src={arrowButton}
                alt=""
                loading="lazy"
                aria-hidden="true"
                className={cx('button-image')}
              />
            </button>
          </form>
        </div>
      </div>

      <div className={cx('wrapper')}>
        <span className={cx('text')}>Консультант по покупкам</span>
        <h3 className={cx('title')}>Автоматизирует продажи</h3>
        <p className={cx('text-product')}>
          Повысьте конверсию и сделайте жизнь ваших покупателей проще. Им будет
          легче выбрать нужные товары, если с ними будет работать опытный ИИ
          продавец.
        </p>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Image src={plates} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Рекомендации по товарам</p>
          </li>
          <li className={cx('item')}>
            <Image src={bag} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Запросы по товарам</p>
          </li>
          <li className={cx('item')}>
            <Image src={show} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Сравнение товаров</p>
          </li>
          <li className={cx('item')}>
            <Image src={investing} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Интеграция с crm</p>
          </li>
        </ul>
        <button className={cx('button')}>Подключить ассистента</button>
      </div>
    </div>
  );
};

export default Automates;
