'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Styles.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';
import plates from '../../../../assets/plates.svg';
import bag from '../../../../assets/bag.svg';
import show from '../../../../assets/show.svg';
import investing from '../../../../assets/investing.svg';
import arrowButton from '../../../../assets/arrowButton.svg';
import Ai from './Ai';

const cx = classNames.bind(styles);
const Automates = () => {
  const [messages, setMessages] = useState([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const messageListRef = useRef(null);
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
        text: 'Желательно, чтобы был автоматический выключатель, когда вода откачана.',
        id: 3,
      },
      {
        sender: 'bot-message',
        text: 'Тогда подойдет WaterMaster 500 с поплавковым выключателем и защитой от сухого хода подойдет. Стандартный разъем, шнур 10 м.',
        id: 4,
      },
      {
        sender: 'send-message',
        text: 'Цена?',
        id: 5,
      },
      {
        sender: 'bot-message',
        text: '7500 ₽. Рекомендую шланг длиной 20 метров из прочного ПВХ с внутренним диаметром 32 мм — идеально подходит для такого насоса. Цена на него 1200 рублей, и с учетом скидки за комплект это будет 1080 рублей. Закажете вместе с насосом?',
        id: 6,
      },
      {
        sender: 'send-message',
        text: 'Да, давайте так. И сколько еще будет в пути? Рассчитайте, пожалуйста, доставку до Иркутска',
        id: 7,
      },
      {
        sender: 'bot-message',
        text: 'По поводу доставки сейчас уточню, ожидайте.',
        id: 8,
      },
      {
        sender: 'bot-message',
        text: 'Доставка до пункта ПЭК в Иркутск  2700',
        id: 9,
      },
      {
        sender: 'send-message',
        text: 'А в пути сколько он будет примерно? ',
        id: 10,
      },
      {
        sender: 'bot-message',
        text: 'В пути будет до 5 дней',
        id: 11,
      },
    ],
    [],
  );

  useEffect(() => {
    if (inView) {
      let messageIndex = messages.length - 1;
      //   console.log(messageIndex, 'насос');
      const intervalId = setInterval(() => {
        if (messageIndex < messageQueue.length) {
          setMessages((prev) => [...prev, messageQueue[messageIndex]]);
          messageIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [inView, messageQueue, messages.length]);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className={cx('content-wrapper')} ref={ref}>
      <div className={cx('wrapper-form')}>
        <div className={cx('wrapper-form', 'content-form')}>
          <h3 className={cx('title-form')}>Aipie</h3>

          {/* Блок переписки */}
          <div className={cx('message-list')} ref={messageListRef}>
            <div>
              <Ai />
              <p className={cx('text-ai')}>Чем я могу помочь?</p>
            </div>
            {messages.map((msg) => (
              <span key={msg?.id} className={cx(`${msg?.sender}`, 'message')}>
                {msg?.text}
              </span>
            ))}
          </div>

          <div className={cx('input-wrapper')}>
            <input
              type="text"
              placeholder="Сообщение"
              className={cx('input')}
              disabled
            />
            <button type="button" className={cx('button-form')} disabled>
              <Image
                src={arrowButton}
                alt=""
                loading="lazy"
                aria-hidden="true"
                className={cx('button-image')}
              />
            </button>
          </div>
        </div>
      </div>

      <div className={cx('wrapper')}>
        <span className={cx('text')}>Консультант по покупкам</span>
        <h3 className={cx('title')}>Автоматизирует продажи</h3>{' '}
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
