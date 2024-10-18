'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import styles from './Styles.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';
import storm from '../../../../assets/storm.svg';
import user from '../../../../assets/user.svg';
import mechanism from '../../../../assets/mechanism.svg';
import arrowButton from '../../../../assets/arrowButton.svg';

const cx = classNames.bind(styles);
const Сonsultation = () => {
  const [messages, setMessages] = useState([]);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);
  const messageListRef = useRef(null);
  const messageQueue = useMemo(
    () => [
      {
        sender: 'send-message',
        text: 'Хотел бы приобрести офисный стул',
      },
      {
        sender: 'bot-message',
        text: 'Здравствуйте! Подскажите, вам важно, чтобы стул был эргономичным для долгого использования, или вы ищете что-то более бюджетное?',
      },

      {
        sender: 'send-message',
        text: 'Нужен стул для длительного сидения, чтобы спина не болела',
      },
    ],
    [],
  );

  useEffect(() => {
    const currentSectionRef = sectionRef.current; // Copy ref value here

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
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
      }, 1500);

      return () => clearInterval(intervalId);
    }
  }, [isSectionVisible, messageQueue, messages.length]);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className={cx('content-wrapper')} ref={sectionRef}>
      <div className={cx('wrapper')}>
        <span className={cx('text')}>Виджет на сайт</span>
        <h3 className={cx('title')}>Консультирует о товарах и услугах</h3>
        <p className={cx('text-product')}>
          AI-консультант, который помогает пользователям вашего сайта получить
          необходимую информацию о товарах и услугах 24/7
        </p>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Image src={storm} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Предоставление данных</p>
          </li>
          <li className={cx('item')}>
            <Image src={user} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Обработка жалоб</p>
          </li>
          <li className={cx('item')}>
            <Image src={mechanism} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Управление процессом</p>
          </li>
        </ul>
        <button className={cx('button')}>Установить виджет</button>
      </div>

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
            {messages.map((msg, index) => (
              <span key={index} className={cx(`${msg?.sender}`)}>
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
    </div>
  );
};

export default Сonsultation;
