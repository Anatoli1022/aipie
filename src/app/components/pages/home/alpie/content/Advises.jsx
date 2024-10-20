'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import styles from './Styles.module.scss';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import classNames from 'classnames/bind';
import manyStars from '../../../../assets/manyStars.svg';
import star from '../../../../assets/star.svg';
import lightning from '../../../../assets/lightning.svg';
import arrowButton from '../../../../assets/arrowButton.svg';
import Ai from './Ai';

const cx = classNames.bind(styles);

const Advises = () => {
  const [messages, setMessages] = useState([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const advisesRef = useRef(null);
  const messageQueue = useMemo(
    () => [
      {
        sender: 'send-message',
        text: 'Добрый день, хотел бы сделать возврат товара',
      },
      {
        sender: 'bot-message',
        text: 'Добрый день, вижу, что вы делали два заказа. Пожалуйста, выберите товар, который вы хотите вернуть:',
      },
      {
        sender: 'option',
        text: 'Витамин D3',
        option: true,
      },
      {
        sender: 'option',
        text: 'Омега 3',
      },
      {
        sender: 'bot-message',
        text: 'Ярлык для возврата был отправлен на электронную почту, указанную в вашем аккаунте. Если вам нужно что-то еще, пожалуйста, дайте знать. Всего хорошего!',
      },
      {
        sender: 'send-message',
        text: 'Отлично спасибо!',
      },
    ],
    [],
  );

  useEffect(() => {
    if (inView) {
      let messageIndex = messages.length;
      // console.log(messageIndex, 'возврат');
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
    if (advisesRef.current) {
      advisesRef.current.scrollTop = advisesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={cx('content-wrapper')} ref={ref}>
      <div className={cx('wrapper-form')}>
        <div className={cx('wrapper-form', 'content-form')}>
          <h3 className={cx('title-form')}>Aipie</h3>

          {/* Блок переписки */}
          <div className={cx('message-list')} ref={advisesRef}>
            <div>
              <Ai />
              <p className={cx('text-ai')}>Чем я могу помочь?</p>
            </div>
            {messages.map((msg, index) => (
              <span key={index} className={cx(`${msg?.sender}`, 'message')}>
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
        <span className={cx('text')}>Техподдержка клиентов</span>
        <h3 className={cx('title')}>Автоматическая обработка 90% заявок</h3>
        <p className={cx('text-product')}>
          AI-ассистент может довести клиента до завершения сделки, даже если
          клиент перестал отвечать
        </p>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Image src={manyStars} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Отслеживание заказов</p>
          </li>
          <li className={cx('item')}>
            <Image src={star} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Обработка жалоб</p>
          </li>
          <li className={cx('item')}>
            <Image src={lightning} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Обработка возвратов</p>
          </li>
        </ul>
        <button className={cx('button')}>Подключить ассистента</button>
      </div>
    </div>
  );
};

export default Advises;
