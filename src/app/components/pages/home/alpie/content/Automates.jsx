'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Styles.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';
import plates from '../../../../assets/plates.svg';
import bag from '../../../../assets/bag.svg';
import show from '../../../../assets/show.svg';
import investing from '../../../../assets/investing.svg';
import arrowButton from '../../../../assets/arrowButton.svg';

const cx = classNames.bind(styles);
const Automates = () => {
  const [messages, setMessages] = useState([]);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);
  const messageListRef = useRef(null);
  const messageQueue = [
    {
      sender: 'send-message',
      text: 'Нужен насос для подвала, глубина 3 метра, до 500 литров воды.',
    },
    {
      sender: 'bot-message',
      text: 'Добрый день, понял. Для таких объемов подойдет дренажный насос мощностью около 500 Вт с производительностью 8000 л/ч. Какие-то доп. функции нужны?',
    },

    {
      sender: 'send-message',
      text: 'Желательно, чтобы был автоматический выключатель, когда вода откачана.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      { threshold: 0.5 }, // Секция должна быть видна на 50%
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isSectionVisible) {
      let messageIndex = messages.length - 1;
      const intervalId = setInterval(() => {
        if (messageIndex < messageQueue.length - 1) {
          setMessages((prev) => [...prev, messageQueue[messageIndex]]);

          messageIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 1500); // Сообщения отправляются с интервалом в 1 секунду

      return () => clearInterval(intervalId);
    }
  }, [isSectionVisible]);
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className={cx('content-wrapper')} ref={sectionRef}>
      <div className={cx('wrapper-form')}>
        <div className={cx('wrapper-form', 'content-form')}>
          <h3 className={cx('title-form')}>Aipie</h3>

          {/* Блок переписки */}
          <div className={cx('message-list')} ref={messageListRef}>
            <div>
              <div className={cx('iframe-container')}>
                <iframe
                  className={cx('iframe')}
                  src="https://my.spline.design/meeet-2b7cd781ad76a3d655b40fdb3b67c8d3/"
                  width="100%"
                  height="100%"
                  style={{ minHeight: '290px' }}
                ></iframe>
              </div>
              <p className={cx('text-ai')}>Чем я могу помочь?</p>
            </div>
            {messages.map((msg) => (
              <span className={cx(`${msg?.sender}`)}>{msg?.text}</span>
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
